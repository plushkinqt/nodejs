var express = require('express');
var app = express();
app.configure( function() {
});
app.get('/', function(req, res){
  res.send('O long Jonson');
});
app.listen(3000);
