var io = require('socket.io-client'),

socket = io.connect('localhost', {
    port: 8080
});


socket.emit('heartbeat', { Name: 'client1' });
