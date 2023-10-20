import React from "react";
import Pokemon from "./Pokemon.jsx";

function PokeGallery(props) {
  const { pokemons } = props;

  return (
    <div className="poke-gallery">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default PokeGallery;
