const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 2000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/chat/main", (req, res) => {
  res.render("chat.ejs");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
