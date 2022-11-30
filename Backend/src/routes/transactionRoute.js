const { Router } = require('express');
const transactionController = require('../controllers/transctionController');

const transactionRoute = Router();

transactionRoute.post('/transaction', transactionController.makeTransaction);
transactionRoute.get('/transaction/:id', transactionController.transData);
transactionRoute.get('/transaction', transactionController.getAll);


module.exports = transactionRoute;