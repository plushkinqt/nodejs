var express = require('express');

var app = express();

var port = process.env.port || 3000;
app.get('/', function(req, res){
  res.send('O long Jonson');
});

app.listen(port);
