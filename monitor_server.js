var socketio = require('socket.io')
  , http = require('http')
  , request = require('request')
  , os = require('os');


var app = http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end();
    })
app.listen(8080);

var serversocket= socketio.listen(app)

var socket = io.connect('http://localhost:8080');

socket.on('heartbeat', function (data) {
    console.log(data);
});
