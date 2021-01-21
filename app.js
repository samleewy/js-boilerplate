const express = require('express');
const xss = require('xss-clean');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const moment = require('moment');
const _ = require('underscore');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// middlewares
app.use(xss());
app.use(cors());

app.use('/api', routes);

module.exports = app;
