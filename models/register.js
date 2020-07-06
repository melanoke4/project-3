const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {type: String, required: true,
  unique: true },
  password: { type: String, required: true }
// anything else?
})

const User = mongoose.model
("user", userSchema);


  module.exports = User;