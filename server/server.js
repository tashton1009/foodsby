var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

////////////import modules//////////
var index = require('./routes/index.js');
var info = require('./routes/info');





app.enable('trust proxy');
//////////// config /////////////
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


///////////routes/////////////
app.use('/info/', info);
app.use('/', index);











//listen
app.listen(port, function() {
  console.log('listening on port', port);
});
