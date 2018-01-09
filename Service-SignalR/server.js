var express = require('express');
var SignalRJS = require('signalrjs');

var signalR = SignalRJS();

var app = express();
app.use(signalR.createListener())
app.use(express.static(__dirname));


// Start the server
app.set('port', process.env.PORT|| 3002);
var server = app.listen(app.get('port'), function() {
        console.log('SignalR listening on port ' + server.address().port);
});

signalR.on('CONNECTED',function(){
	console.log('connected');
	setInterval(function () {
		signalR.send({time:new Date()});
	},1000)
});