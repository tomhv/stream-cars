package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"os"
	"time"
)

type Racer struct {
	ID       string `json:"id"`
	Driver   string `json:"driver"`
	Progress int    `json:"progress"`
}

func main() {
	http.HandleFunc("/racers", func(w http.ResponseWriter, req *http.Request) {
		j, err := json.MarshalIndent(racers(), "", "  ")
		if err != nil {
			os.Exit(1)
		}
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Fprintf(w, string(j))
	})
	http.ListenAndServe(":8038", nil)
}

func racers() []Racer {
	rand.Seed(time.Now().UnixNano())
	return []Racer{
		{
			ID:       "tom",
			Driver:   "Tom",
			Progress: rand.Intn(100),
		},
		{
			ID:       "nic",
			Driver:   "Nic",
			Progress: rand.Intn(100),
		},
		{
			ID:       "dan",
			Driver:   "Dan",
			Progress: rand.Intn(100),
		},
		{
			ID:       "sam",
			Driver:   "Sam",
			Progress: rand.Intn(100),
		},
		{
			ID:       "vic",
			Driver:   "Vic",
			Progress: rand.Intn(100),
		},
	}
}
