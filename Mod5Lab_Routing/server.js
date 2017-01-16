'use strict';

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use('/app', express.static(path.join(__dirname,'app')));
app.use('/controllers', express.static(path.join(__dirname,'app/controllers')));
app.use('/angular', express.static(path.join(__dirname,'node_modules/angular')));
app.use('/angularroute', express.static(path.join(__dirname,'node_modules/angular-route')));
app.use('/bootstrap', express.static(path.join(__dirname,'node_modules/bootstrap/dist')));

var server = app.listen(4000, function(){
    var port = server.address().port;
    console.log('listening on port: ' + port); 
});