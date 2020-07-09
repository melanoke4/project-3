const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportConfig = require("../../passportConfig");
// passport.use(new LocalStrategy(User.authenticate()))
// const loginController = require("../../controllers/loginController");

router.post("/", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });

  module.exports = router;