var express = require('express');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const manageDB = require('./manage-db');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/manage-db', manageDB);

module.exports = app;
