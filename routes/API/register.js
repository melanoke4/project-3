const router = require("express").Router();
const registerController = require("../../controllers").registerController;


router.route("/register").post(registerController.create);

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          // password: req.body.password
          password: hashedPassword
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });

 module.exports = router;