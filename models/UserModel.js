const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
    premiumUser: {
        type: Boolean,
        default: false,
        userCreated: {
            type: Date,
            default: Date.now
          },
    }
});
 
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);