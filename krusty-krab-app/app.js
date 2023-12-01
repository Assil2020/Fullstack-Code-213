const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/krusty-krab", {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
