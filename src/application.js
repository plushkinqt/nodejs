var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    users = require('./users');

module.exports = app;

app.use(bodyParser.json());


app.get('/users', function(req, res) {

  users.getUsers(function(err, result) {
    if (err) {
      return res.status(400).json( { success: false, reason: err.message });
    }
    res.send({ success: true, users: result });
  });

});
