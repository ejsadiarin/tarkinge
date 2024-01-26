package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/markbates/goth/gothic"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// root endpoint or route
	r.Get("/", s.HelloWorldHandler)

	r.Get("/health", s.healthHandler)

	// clicking signin button hits this URL
	r.Get("/auth/{provider}", func(w http.ResponseWriter, r *http.Request) {
		q := r.URL.Query()
		q.Add("provider", chi.URLParam(r, "provider"))
		r.URL.RawQuery = q.Encode()

		gothic.BeginAuthHandler(w, r)
	})

	// after user is authenticated, Google sends user details in this callback URL and stores sessions
	r.Get("/auth/{provider}/callback", s.getAuthCallbackFunction)

	// logout
	r.Get("/logout/{provider}", func(res http.ResponseWriter, req *http.Request) {
		gothic.Logout(res, req)
		res.Header().Set("Location", "/")
		res.WriteHeader(http.StatusTemporaryRedirect)
	})

	return r
}

func (s *Server) HelloWorldHandler(w http.ResponseWriter, r *http.Request) {
	resp := make(map[string]string)
	resp["message"] = "Hello World"

	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("error handling JSON marshal. Err: %v", err)
	}

	_, _ = w.Write(jsonResp)
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	jsonResp, _ := json.Marshal(s.db.Health())
	_, _ = w.Write(jsonResp)
}

func (s *Server) getAuthCallbackFunction(w http.ResponseWriter, r *http.Request) {
	// provider := chi.URLParam(r, "provider")
	//
	// r = r.WithContext(context.WithValue(context.Background(), "provider", provider))

	user, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		fmt.Fprintln(w, r)
		return
	}

	fmt.Println(user)

	http.Redirect(w, r, "http://localhost:5173/dashboard", http.StatusFound)
}
