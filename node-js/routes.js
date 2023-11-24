const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/randomName", (req, res) => {
  const names = ["Assil", "Samy", "Juba", "Khalil", "Soheib", "Kader"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.json({ name: randomName });
});

module.exports = router;
