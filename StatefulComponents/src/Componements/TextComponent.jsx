import React from "react";
import PropTypes from "prop-types";

const TextComponent = ({
  editMode,
  name,
  setName,
  description,
  setDescription,
  imageUrl,
  setImageUrl,
  handleDelete,
  handleEdit,
  handleSaveChanges,
}) => {
  return (
    <div className={`text-component ${editMode ? "edit-mode" : "view-mode"}`}>
      {editMode ? (
        <div>
          <input
            className="edit-input input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="edit-input input-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="edit-input input-img"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button className="save-button btn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-info">
            <strong>Name: </strong>
            {name}
          </h2>
          <p className="text-info">
            <strong>Description:</strong> {description}
          </p>
          <button className="edit-button btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

TextComponent.propTypes = {
  editMode: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  setImageUrl: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleSaveChanges: PropTypes.func.isRequired,
};

export default TextComponent;
