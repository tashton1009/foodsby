var router = require('express').Router();
var path = require('path');
var pg = require('pg');
var info = require('./info');






router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});



router.get('/*', function (req, res) {
    console.log('404 : ', req.params);
    res.sendStatus(404);
});


module.exports = router;
