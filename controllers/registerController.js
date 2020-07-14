const User = require("../models/UserModel");

module.exports = {
    create: function (req, res) {

        // User.findOne({ username: req.body.username }, async (err, doc) => {
        //     if (err) throw err;
        //     if (doc) res.send("User Already Exists");
        //     if (!doc) {
        //       const hashedPassword = await bcrypt.hash(req.body.password, 10);

        //       const newUser = new User({
        //         username: req.body.username,
        //         // password: req.body.password
        //         password: hashedPassword
        //       });
        //       await newUser.save();
        //       res.send("User Created");
        //     }
        //   });
        User.create(req.body)
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    }
};