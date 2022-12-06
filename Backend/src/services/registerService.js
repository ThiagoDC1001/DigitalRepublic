const md5 = require('md5');
const models = require('../models');
const generateToken = require('../helpers/generateToken');

const errorMessage = { status: 409, message: 'conflict'};
const INITIAL_VALUE_BALANCE = 4000;

const registerService = {  
async create (body)  {
  const { name, cpf, password } = body;
  const passwordHash = md5(password);
  const userExist = await models.User.findAll({ where: { name, cpf } });
  if (userExist[0]) throw errorMessage;
  const balance = INITIAL_VALUE_BALANCE;
  const account = await models.Account.create({ balance })
  const user = await models.User.create({ accountId: account.id, name, cpf, password: passwordHash });

  if (!user) throw errorMessage;
  const token = await generateToken({
    id: user.id, name, cpf,
  });  

  return {
    name: user.name, cpf: user.cpf, token,
  };
},
}

module.exports = registerService;

