var express = require('express');
var app = express();
app.get('/hello.txt', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});
app.listen(120120);
console.log('Listening on port 3000');