require('dotenv').config()
var express = require('express');
var cors = require('cors')
var path = require('path');
//var cookieParser = require('cookie-parser');

var authenticationRouter = require('./routes/auth');

//Get port from environment and store in Express.
var port = (process.env.PORT || '3000');


var app = express();
var corsOptions = {
    origin: `http://localhost:${port}/`
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authenticationRouter);
app.get('/', (req, res, next) => {
    res.send("Welcome to Carent Back-End")
})




//Listen on provided port, on all network interfaces.

app.listen(port);
console.log("Server listening on port "+port)
console.log(`Visit http://localhost:${port}/`)