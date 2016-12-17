/**
 * Created by muhammed on 17/12/16.
 * This creates a server and listens to port 2000 for incoming connection.
 */

var fs = require('fs');
var http = require('http');
var math = require('./custom_node_modules/math');

var server = http.createServer(function (req, res) {
    fs.readFile('files/employees.txt', function (error, data) {
        res.end(data.toString());
    })
});

server.listen('2000', function () {
    console.log('server listening on port 2000...');
});