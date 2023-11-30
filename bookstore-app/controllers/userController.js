const { getUsers, saveUsers } = require("../models/User");
const { getBooksForUser } = require("../models/Book");

exports.login = (req, res) => {
  res.render("login");
};

exports.dashboard = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const books = await getBooksForUser(req.user.id);

      res.render("dashboard", { user: req.user, books });
    } catch (error) {
      console.error("Error in dashboard controller:", error);
      res.redirect("/error");
    }
  } else {
    res.redirect("/users/login");
  }
};

exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
