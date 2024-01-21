package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	// TODO: check the chi documentation for important server-side stuff
	//  --> https://pkg.go.dev/github.com/go-chi/chi/v5@v5.0.11
	// TODO: use Goth for auth
	// TODO: use Goose for migrations
	// TODO: use SQLc for SQL?? or just raw dog SQL (don't use GORM)
	//  --> see: ~/main/rawdogSQLwithGo.png --> for the SQL
	// TODO: use Resend for email
	// TODO: use _ for notifications
	// TODO: make it PWA

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	fmt.Println("Server listening on http://localhost:3000")
	http.ListenAndServe(":3000", r)
}
