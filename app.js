require("dotenv").config();
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var Cookies = require("cookies");
var authenticationRouter = require("./routes/auth.routes");
var userRouter = require("./routes/user.routes")
var path = require("path");
const multer  = require('multer')






//Get port from environment and store in Express.
const port = process.env.PORT || "3000";



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

var app = express();
var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(Cookies.express());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authenticationRouter);

const upload = multer({ dest: './public/images/' })

app.use("/user", upload.array("images", 6), userRouter)

app.get("/", (req, res, next) => {
  res.send("Welcome to Carent Back-End");
});

//Listen on provided port, on all network interfaces.

app.listen(port);
console.log("Server listening on port " + port);
console.log(`Visit http://localhost:${port}/`);
