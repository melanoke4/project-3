const db = require("../models");

// const axios = require("axios")

module.exports = function (app) {
    app.get("/test", function (req, res){
        var newWord = {};
        newWord.word = "hello";
        console.log("route is reached");
    db.Test.create(newWord)
    .then(function (dbTest) {
        // View the added result in the console
        console.log(dbTest);
      })
      .catch(function (err) {
        // If an error occurred, log it
        console.log(err);
      });
    

    res.send("test Complete");
});
}