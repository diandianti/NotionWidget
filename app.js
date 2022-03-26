var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression());

module.exports = app;


