var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.use(logger('dev'));

app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', require('./routes'));

// Start the server
app.set('port', process.env.PORT|| 3001);
var server = app.listen(app.get('port'), function() {
        console.log('LDAP listening on port ' + server.address().port);
});