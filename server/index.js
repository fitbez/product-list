const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
console.log(process.env.MOGODB_URI);

/* DB connection */
mongoose
  .connect(process.env.MOGODB_URI)
  .then(() => {
    console.log("DB connection is successfull...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
