const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/user', userController.getAll);
userRoute.post('/user', userController.createUser);
// userRoute.post('/account', userController.createAccount);

module.exports = userRoute;