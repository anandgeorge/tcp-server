var express = require('express');
var app = express();
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var status = false;
var server;

app.get('/start', function(req,res)	{
	console.log(status);
	if(!status)	{
		server = net.createServer();
		server.listen(PORT, HOST);
		server.on('connection', function(sock) {
		  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
			status = true;
			console.log(status);
		  sock.on('data', function(data) {
				var res = data.toString().split("~");
				console.log(res.length);
				sock.write('You said "' + data + '"');
		  });
		  
		  sock.on('close', function(data) {
		  });
		});
		res.end('Server running');
	}
	else	{
		console.log('Trying to stop server');
		server.close();
		status = false;
		console.log(status);
		res.end('Server stopped');
	}
});

app.listen(3000);
