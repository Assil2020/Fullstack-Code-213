const Recipe = require("../models/recipe");

exports.createRecipe = async (req, res) => {
  const { name, menu } = req.body;

  try {
    const newRecipe = new Recipe({ name, menu });
    await newRecipe.save();

    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { name, menu } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, menu },
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe updated successfully", recipe: updatedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully", recipe: deletedRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
