var socketio = require('socket.io')
  , http = require('http')
  , request = require('request')
  , os = require('os');


var serversocket= socketio.listen(8080)

socketio.sockets.on('heartbeat', function (data) {
    console.log(data);
});
