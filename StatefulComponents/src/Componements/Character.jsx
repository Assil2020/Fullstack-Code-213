import React, { useState } from "react";
import PropTypes from "prop-types";
import TextComponent from "./TextComponent";

const Character = ({ character, characters, setCharacters }) => {
  const [showTextComponent, setShowTextComponent] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [imageUrl, setImageUrl] = useState(character.imageUrl);

  const handleDelete = () => {
    const updatedCharacters = characters.filter(
      (char) => char.id !== character.id
    );
    setCharacters(updatedCharacters);
    console.log("Deleting character:", character.name);
  };
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    setEditMode(false);
  };

  return (
    <div className="character">
      <div onClick={() => setShowTextComponent(!showTextComponent)}>
        <img src={imageUrl} alt={name} />
      </div>
      {showTextComponent && (
        <TextComponent
          character={character}
          editMode={editMode}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSaveChanges={handleSaveChanges}
        />
      )}
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    setImageUrl: PropTypes.string.isRequired,
  }).isRequired,
  characters: PropTypes.array.isRequired,
  setCharacters: PropTypes.func.isRequired,
};

export default Character;
