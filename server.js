var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pic.html'));
});
app.get('/style.1.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.1.css'));
});

app.listen(8080);
console.log('Server running on 8080');