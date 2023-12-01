const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, menuController.getAllItems);
router.post("/", authMiddleware, menuController.createItem);
router.get("/:id", authMiddleware, menuController.getItemById);
router.put("/:id", authMiddleware, menuController.updateItem);
router.delete("/:id", authMiddleware, menuController.deleteItem);

module.exports = router;
