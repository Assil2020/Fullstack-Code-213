const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/krusty-krab-api-rest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.use(bodyParser.json());

app.use("/menu", menuRoutes);
app.use("/auth", authRoutes);
app.use("/recipes", recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
