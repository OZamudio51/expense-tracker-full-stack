const path = require('path');
require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const connectDB = require('./db');

dotenv.config({ path: '.env' });

connectDB();

const transactionsRouter = require('../routes/transactions');

const app = express();

app.use(express.json());

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/v1/transactions', transactionsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        repsonse = { message : error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app