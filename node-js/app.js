const http = require("http");
const express = require("express");
const router = require("./routes");

const app = express();

app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`app live on port ${port}`);
});
