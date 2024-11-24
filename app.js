const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const posts_routes = require("./routes/posts_routes");
app.use("/posts", posts_routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
