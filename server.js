const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const users = require('./routes/api/users');

const app = express();
app.use(sslRedirect());
// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));