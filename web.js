var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var len = 0;


app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html', 'utf8');
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
