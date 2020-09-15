const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
// Load User model
const User = require('../../models/User');
// @route   GET api/users/Signup
// @desc    Signup user
// @access  Public
router.post('/signup', (req, res) => {
  User.findOne({ name: req.body.name }).then(user => {
    if (user) {
      return res.status(400).json({error:'user already exists'});
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.json(err));
        });
      });
    }
  });
});
// @route   GET api/users/Signin
// @desc    Signin User / Returning JWT Token
// @access  Public
router.post('/signin', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  // Find user by employeeNum
  User.findOne({ name }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({error:'User not found'});
    }
    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { name: user.name, email: user.email, avatar: user.avatar }; // Create JWT Payload
        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({error:'Password incorrect'});
      }
    });
  });
});
module.exports = router;