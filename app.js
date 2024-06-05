require('dotenv').config()
var express = require('express');
var path = require('path');
var debug = require('debug')
//var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


//Get port from environment and store in Express.
var port = (process.env.PORT || '3000');

//Listen on provided port, on all network interfaces.

app.listen(port);
app.on('error', onError);
app.on('listening', onListening);
console.log("Server listening on port "+port)
console.log(`Visit http://localhost:${port}/`)

  
//Event listener for HTTP server "error" event.
  
function onError(error) {
if (error.syscall !== 'listen') {
    throw error;
}

var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

// handle specific listen errors with friendly messages
switch (error.code) {
    case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
    case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
    default:
    throw error;
}
}

//Event listener for HTTP server "listening" event

function onListening() {
var addr = server.address();
var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
debug('Listening on ' + bind);
}


