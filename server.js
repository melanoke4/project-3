const express = require("express");
const path = require("path");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/UserModel");
const registerRouter = require("./routes/API/registerRouter");
const loginRouter = require("./routes/API/loginRouter");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/KidsCodingCorner";

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => {
  console.log("Mongoose Is Connected");
});

app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3001", //location on app we are connecting to
  credentials: true
}));
app.use(session({
  secret: "secretcode",
  resave: false,
  saveUninitialized: true
}));
app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());

/* PASSPORT LOCAL AUTHENTICATION */
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
//--------------------END OF MIDDLEWARE----------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});