const { Router } = require('express');

const loginController = require ('../controllers/loginController');
const loginValidateController = require('../controllers/loginValidateController');
const auth = require('../middlewares/auth');


const loginRoute = Router();

loginRoute.post('/login', loginController);
loginRoute.get('/login/validate', auth, loginValidateController.loginValidate);


module.exports = loginRoute;