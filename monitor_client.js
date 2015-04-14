var socketio = require('socket.io')
  , http = require('http')
  , request = require('request')
  , os = require('os');


var socket = socketio.connect('http://localhost:8080')

socket.emit('heartbeat',
{
      name: "Client1"
      //, cpu: cpuAverage()
 });
