const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const recipeController = require("../controllers/recipeController");

router.post("/", authMiddleware, recipeController.createRecipe);
router.get("/", authMiddleware, recipeController.getAllRecipes);
router.get("/:id", authMiddleware, recipeController.getRecipeById);
router.patch("/:id", authMiddleware, recipeController.updateRecipe);
router.delete("/:id", authMiddleware, recipeController.deleteRecipe);

module.exports = router;
