const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const userRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const { getBooks } = require("./models/Book");

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "your-secret-key", resave: true, saveUninitialized: true })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/users", authRoutes);
app.use("/users", userRoutes);
app.use("/", bookRoutes);
app.get("/", async (req, res) => {
  try {
    const books = await getBooks();
    res.render("home", { books });
  } catch (error) {
    console.error("Error getting books:", error);
    res.redirect("/error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
