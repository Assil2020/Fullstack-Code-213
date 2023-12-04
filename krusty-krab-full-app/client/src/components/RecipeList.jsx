import React, { useEffect, useState } from "react";
import "./RecipeList.css";

const RecipeList = ({ token }) => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    menu: [
      {
        itemName: "",
        description: "",
        category: "",
        isVegetarian: false,
      },
    ],
  });

  const fetchRecipes = async () => {
    try {
      console.log("Token in fetchRecipes:", token);
      const response = await fetch("http://localhost:3000/recipes", {
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        console.error("Failed to fetch recipes");
      }
    } catch (error) {
      console.error("Error during recipe fetch:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [token]);

  const handleAddRecipe = async () => {
    try {
      const response = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        console.log("Recipe added successfully");
        setNewRecipe({
          name: "",
          menu: [
            {
              itemName: "",
              description: "",
              category: "",
              isVegetarian: false,
            },
          ],
        });
        fetchRecipes();
      } else {
        console.error("Failed to add recipe");
      }
    } catch (error) {
      console.error("Error during recipe addition:", error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        console.log("Recipe deleted successfully");
        fetchRecipes();
      } else {
        console.error("Failed to delete recipe");
      }
    } catch (error) {
      console.error("Error during recipe deletion:", error);
    }
  };

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-heading">Liste des recettes</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe._id} className="recipe-list-item">
            {recipe.name}
            <button
              onClick={() => handleDeleteRecipe(recipe._id)}
              className="delete-button"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <h2 className="add-recipe-heading">Ajouter une nouvelle recette</h2>
      <label>
        Nom de la recette:
        <input
          type="text"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          className="input"
        />
      </label>

      <h3>Menu</h3>
      <label>
        Nom de l'item:
        <input
          type="text"
          value={newRecipe.menu[0].itemName}
          onChange={(e) =>
            setNewRecipe({
              ...newRecipe,
              menu: [{ ...newRecipe.menu[0], itemName: e.target.value }],
            })
          }
          className="input"
        />
      </label>

      <label>
        Description de l'item:
        <textarea
          value={newRecipe.menu[0].description}
          onChange={(e) =>
            setNewRecipe({
              ...newRecipe,
              menu: [{ ...newRecipe.menu[0], description: e.target.value }],
            })
          }
          className="input"
        />
      </label>

      <label>
        Catégorie de l'item:
        <input
          type="text"
          value={newRecipe.menu[0].category}
          onChange={(e) =>
            setNewRecipe({
              ...newRecipe,
              menu: [{ ...newRecipe.menu[0], category: e.target.value }],
            })
          }
          className="input"
        />
      </label>

      <label>
        Végétarien:
        <input
          type="checkbox"
          checked={newRecipe.menu[0].isVegetarian}
          onChange={(e) =>
            setNewRecipe({
              ...newRecipe,
              menu: [{ ...newRecipe.menu[0], isVegetarian: e.target.checked }],
            })
          }
        />
      </label>

      <button onClick={handleAddRecipe} className="add-button">
        Ajouter la recette
      </button>
    </div>
  );
};

export default RecipeList;
