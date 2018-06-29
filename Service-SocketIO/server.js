var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3003;

app.use('/bower_components',express.static(__dirname + '/bower_components'));  
app.use('/node_modules',express.static(__dirname + '/node_modules'));  

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, function () {
    console.log('Socket-io at port %d', port);
  });


  io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
      console.log(data);
    });

    client.on('messages', function(data) {
         console.log(data);
         client.emit('broad', data);
         client.broadcast.emit('broad',data);
    });

});

