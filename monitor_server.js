var sio = require('socket.io')
  , http = require('http')
  , request = require('request')
  , os = require('os')
  , express = require('express');


  var app = require('express').createServer();
  var io = require('socket.io').listen(app);



  io.sockets.on('connection', function (socket) {

        socket.on('hearbeat',function(data){
              console.log(data);
        });

  })
