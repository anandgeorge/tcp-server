var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('AAAAAAA~52~HOMEGATE1~101~08:10:42.31~284~AAAAAA~16');
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
		client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});
