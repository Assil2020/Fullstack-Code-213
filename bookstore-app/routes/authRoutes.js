const express = require("express");
const passport = require("passport");
const { authenticateUser } = require("../middlewares/authMiddleware");
const { getUsers, saveUsers } = require("../models/User");
const router = express.Router();
const { isAuthenticated } = require("../routes/UserRoutes");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", authenticateUser);

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "All fields are required for registration" });
  }

  const newUser = { username, email, password };

  const users = await getUsers();

  users.push(newUser);

  await saveUsers(users);

  res.redirect("/users/dashboard");
});

module.exports = router;
