const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
