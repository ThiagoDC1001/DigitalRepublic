const { Router } = require('express');
const registerController = require('../controllers/registerController');

const registerRoute = Router();

registerRoute.post('/login/register', registerController);

module.exports = registerRoute;