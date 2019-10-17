var express = require('express');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const myDBs = require('./my-dbs');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/my-dbs', myDBs);

module.exports = app;
