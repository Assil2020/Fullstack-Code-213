import React from "react";
import "./App.css";
import PokeGallery from "./Componements/PokeGallery.jsx";

function App() {
  const pokemons = [
    {
      name: "Venusaur",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/venusaur.avif",
      types: ["Grass · Poison"],
    },
    {
      name: "Charizard",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/charizard.avif",
      types: ["Fire · Flying"],
    },
    {
      name: "Arbok",
      image: "https://img.pokemondb.net/sprites/home/normal/2x/avif/arbok.avif",
      types: ["Poison"],
    },
    {
      name: "Raichu",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/raichu.avif",
      types: ["Electric"],
    },
    {
      name: "Nidoking",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/nidoking.avif",
      types: ["Poison · Ground"],
    },
    {
      name: "Persian",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/persian.avif",
      types: ["Normal"],
    },
    {
      name: "Centiskorch",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/centiskorch.avif",
      types: ["Fire · Bug"],
    },
    {
      name: "Passimian",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/passimian.avif",
      types: ["Fighting"],
    },
    {
      name: "Incineroar",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/incineroar.avif",
      types: ["Fire · Dark"],
    },
    {
      name: "Aerodactyl",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/aerodactyl.avif",
      types: ["Flying"],
    },
    {
      name: "Moltres",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/moltres.avif",
      types: ["Flying"],
    },
    {
      name: "Umbreon",
      image:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/umbreon.avif",
      types: ["Dark"],
    },
  ];

  return (
    <div className="App">
      <h1>Pokemon Gallery</h1>
      <PokeGallery pokemons={pokemons} />
    </div>
  );
}

export default App;
