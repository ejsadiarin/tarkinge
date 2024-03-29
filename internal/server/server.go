package server

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/ejsadiarin/tarkinge/internal/database"
	_ "github.com/joho/godotenv/autoload"
)

type Server struct {
	db   database.Service
	port int
}

func NewServer() *http.Server {
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	NewServer := &Server{
		port: port,
		db:   database.New(),
	}

	// Declare Server config
	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", NewServer.port),
		Handler:      NewServer.RegisterRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	fmt.Printf("Server listening on port%s\n", server.Addr)
	return server
}
