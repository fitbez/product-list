const express = require("express");
const mongoose = require("mongoose");

const app = express();

/* DB connection */
mongoose
  .connect(
    "mongodb+srv://fitbez:123fitbez@cluster0.sjvos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connection is successfull...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
