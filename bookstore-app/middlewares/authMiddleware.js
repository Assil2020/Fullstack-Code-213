const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUsers } = require("../models/User");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const users = await getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return done(null, false, { message: "Invalid username or password" });
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  const users = await getUsers();
  const user = users.find((u) => u.username === username);
  done(null, user);
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}

module.exports = {
  authenticateUser: passport.authenticate("local"),
  isAuthenticated,
};
