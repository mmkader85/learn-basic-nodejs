/**
 * Created by muhammed on 17/12/16.
 *
 * This script creates a server using express framework and
 * listens to port 2001 for incoming connection.
 */

var express = require('express');
var app = express();

var file = __dirname + '/files/first.html';

//Path 1
app.get('/', function (req, res) {
    res.sendFile(file);
});

//Path 2
app.post('/login', function (req, res) {
    var output = 'Login Successful. ';
    output += '<a href="/product">Get product</a>';
    res.send(output);
    res.end();
});

//Path 3
app.get('/product', function (req, res) {
    res.json({id:134, name:'Xiaomi Mi5', price:'S$ 525'});
});

app.listen(8080, function (req, res) {
    console.log('Server is listening on port 8080');
})