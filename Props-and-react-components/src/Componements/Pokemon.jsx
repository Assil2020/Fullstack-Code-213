import React from "react";

const Pokemon = ({ name, image, types }) => {
  return (
    <div className="pokemon">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Types: {types.join(", ")}</p>
    </div>
  );
};

export default Pokemon;
