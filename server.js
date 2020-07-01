const express = require("express");
const path = require("path");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");


app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var test = {
  word: "hello"
};

db.Test.create(test)
.then(function(tests) {
  // If saved successfully, print the new Example document to the console
  console.log(tests);
})
.catch(function(err) {
  // If an error occurs, log the error message
  console.log(err.message);
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/KidsCodingCorner";

mongoose.connect(MONGODB_URI);



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
