package main

import (
	"fmt"
	"net/http"

	"github.com/ejsadiarin/tarkinge/internal/routes"
)

func mainVanilla() {
	router := routes.NewRouter()
	port := 8777
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server listening on http://localhost%s", addr)
	err := http.ListenAndServe(addr, router)
	if err != nil {
		panic(err)
	}
}
