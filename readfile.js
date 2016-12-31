/**
 * Created by muhammed on 17/12/16.
 *
 * This script creates a server using built-in http module and
 * listens to port 2000 for incoming connection.
 */

var fs = require('fs');
var http = require('http');

var file = __dirname + '/files/employees.txt';
var server = http.createServer(function (req, res) {
    fs.readFile(file, function (error, data) {
        res.end(data.toString());
    });
});

var port = 2000;
server.listen(port, function () {
    console.log('server listening on port ' + port);
});
