const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { getUserByUsername, getUserById } = require("./your-user-model");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Utilisateur non trouvé" });
      }

      if (user.password !== password) {
        return done(null, false, { message: "Mot de passe incorrect" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
