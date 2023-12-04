const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  menu: [
    {
      itemName: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      isVegetarian: { type: Boolean, default: false },
    },
  ],
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
