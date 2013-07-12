var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buff = new Buffer();

//buff = fs.readFileSync('index.html');
//var text = buff.toString();

app.get('/', function(request, response) {
    response.send("hey there");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
