const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/user', userController.getAll);
userRoute.get('/user/:id', userController.findOne);
userRoute.post('/user', userController.createUser);


module.exports = userRoute;