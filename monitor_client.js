var io = require('socket.io-client'),

 socket = io.connect('http://localhost:8080/');

 socket.on('connect',function(){
  //  socket.emit('message', 'Hello server');

socket.emit('heartbeat', { Name: 'client1' });
});
