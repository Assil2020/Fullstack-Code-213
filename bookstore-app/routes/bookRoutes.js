const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/shop", isAuthenticated, bookController.getShop);
router.post(
  "/products/add-to-cart/:bookId",
  (req, res, next) => {
    res.locals.addedToCart = true;
    next();
  },
  bookController.addToCart
);
router.post("/delete-from-cart/:bookId", bookController.deleteFromCart);

router.get("/buy", bookController.viewCart);
router.get("/confirm-purchase", bookController.confirmPurchase);
router.get("/add-book", isAuthenticated, bookController.getAddBookForm);
router.post("/add-book", isAuthenticated, bookController.addBook);

router.get(
  "/edit-book/:bookId",
  isAuthenticated,
  bookController.getEditBookForm
);
router.post("/edit-book/:bookId", isAuthenticated, bookController.editBook);
router.get("/delete-book/:bookId", isAuthenticated, bookController.deleteBook);

module.exports = router;
