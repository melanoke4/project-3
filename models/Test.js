var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
// This is similar to a Sequelize model
var Test = new Schema({
  // `title` is of type String
  word: String
 
});

// This creates our model from the above schema, using mongoose's model method
var Test = mongoose.model("Test", Test);

// Export the Comment model
module.exports = Test;
