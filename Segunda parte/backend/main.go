package main

import (
    "encoding/json"
    "net/http"
)

func mensajeHandler(w http.ResponseWriter, r *http.Request) {
    response := map[string]string{"mensaje": "Hola desde el backend en Go"}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("/mensaje", mensajeHandler)
    http.ListenAndServe(":8080", nil)
}
