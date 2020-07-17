const User = require("../models/UserModel");
const passport = require("passport");

module.exports = {
    create: function (req, res) {
        User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                return res.send({message: "Failed to register new user.", error: err});
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    }
};