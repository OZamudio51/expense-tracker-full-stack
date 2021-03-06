const express = require('express');
const transactionsRouter = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../services/transactionsServices');

transactionsRouter
.route('/')
.get(getTransactions)
.post(addTransaction)

transactionsRouter
.route('/:id')
.delete(deleteTransaction);

module.exports = transactionsRouter;