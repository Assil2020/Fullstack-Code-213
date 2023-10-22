import React from "react";
import PropTypes from "prop-types";
import Character from "./Character";

const Dashboard = ({ characters, setCharacters }) => {
  return (
    <div className="dashboard">
      {characters.map((character) => (
        <Character
          key={character.id}
          character={character}
          characters={characters}
          setCharacters={setCharacters}
        />
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  characters: PropTypes.array.isRequired,
  setCharacters: PropTypes.func.isRequired,
};

export default Dashboard;
