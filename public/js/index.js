let socket  = io();

socket.on('connect', () => {
 console.log('Connected to server');

// socket.emit('createMessage', {
//     from: "First Avocado",
//     text: "Wats going on!"
// })
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
   });

socket.on('newMessage',function(message){
    console.log("newMessage", message);
});