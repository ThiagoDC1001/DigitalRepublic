const { User } = require('../models');
const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken');

const errorMessage = { status: 404, message: 'Not Found'};

const loginService = {
async login (cpf, password) {      
  const user = await User.findOne({ where: { cpf } });    
  if (!user) throw errorMessage;  
  const passwordHash = encriptPassword(password);
  if (passwordHash !== user.dataValues.password) throw errorMessage;

  const token = generateToken({ 
    id: user.dataValues.id, 
    name: user.dataValues.name, 
    cpf: user.dataValues.cpf });  
  return token
},
}

module.exports =  loginService;