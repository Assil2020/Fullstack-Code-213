const express = require("express");
const passport = require("passport");
const router = express.Router();
const { login, dashboard, logout } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/login", login);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
router.get("/dashboard", isAuthenticated, dashboard);
router.get("/logout", logout);

module.exports = router;
