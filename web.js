var express = require('express');
var buf = new Buffer(256);
var app = express.createServer(express.logger());
var fs = require('fs');
var len = 0;

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  len = buf.write(data);
});

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8", 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
