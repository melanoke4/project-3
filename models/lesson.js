var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
// This is similar to a Sequelize model
var LessonSchema = new Schema({
  // `title` is of type String
  Title: String,
  LessonNumber: Number,
  Content: String,
  Quiz: [{
    type: Schema.Types.ObjectId,
    ref: "Questions"
  }]
  
 
});

// This creates our model from the above schema, using mongoose's model method
var Lesson = mongoose.model("Lesson", LessonSchema);

// Export the Comment model
module.exports = Lesson;
