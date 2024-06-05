require("dotenv").config();
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var authenticationRouter = require("./routes/auth.routes");
const cookieSession = require("cookie-session");

//var path = require("path");


var db = mongoose
  .connect(process.env.conString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
//var cookieParser = require('cookie-parser');



//Get port from environment and store in Express.
var port = process.env.PORT || "3000";

var app = express();
var corsOptions = {
  origin: `http://localhost:${port}/`,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

app.use(
  cookieSession({
    name: "carent-session",
    keys: ["COOKIE_SECRET"], 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 //24 hours
  })
);


app.use("/auth", authenticationRouter);

app.get("/", (req, res, next) => {
  res.send("Welcome to Carent Back-End");
});

//Listen on provided port, on all network interfaces.

app.listen(port);
console.log("Server listening on port " + port);
console.log(`Visit http://localhost:${port}/`);
