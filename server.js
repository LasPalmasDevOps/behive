
/**
 * require deps
 */

var express = require('express.io'),
    app     = express(),
    jade    = require('jade');

/**
 * run ws
 */

app.http().io();

/**
 * config
 */

app.configure(function() {
  app.use(express.urlencoded());
});

/**
 * routes
 */

app.get('/', function(req, res, next) {
  res.send('<h2>Hello world</h2>');
});

/**
 * app listen
 */

app.listen(3000);
