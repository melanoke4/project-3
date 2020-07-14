var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
// This is similar to a Sequelize model
var QuestionSchema = new Schema({
  // `title` is of type String
 LessonNumber: Number,
 QuestionStatement: String,
 answers: [
   {
     Option:String,
     Correct: Boolean
   }
 ]
 
});

// This creates our model from the above schema, using mongoose's model method
var Question = mongoose.model("Question", QuestionSchema);

// Export the Comment model
module.exports = Question;
