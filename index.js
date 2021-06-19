var io = require('socket.io').listen(6969);

console.log("listening on 6969") 
io.sockets.on('connection', function (socket) {
  console.log("Someone just connected!");
  
  // Echo back messages from the client
     socket.on('msg', function (message) {
         console.log("Got message: " + message);
             socket.emit('message', message);
               });  
               });
