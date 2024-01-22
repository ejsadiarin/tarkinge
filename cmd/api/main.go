package main

import (
	"fmt"

	"github.com/ejsadiarin/tarkinge/internal/auth"
	"github.com/ejsadiarin/tarkinge/internal/server"
)

func main() {
	// Instantiate Gothic
	auth.NewAuth()
	server := server.NewServer()

	err := server.ListenAndServe()
	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
