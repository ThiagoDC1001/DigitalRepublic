const { User } = require('../models');

const loginValidateService = {
  async loginValidate(data) {
    const errorMessage = { status: 403, message: 'Token not found' }
    const userExists = await User.findByPk(data.id);
    if (!userExists) throw errorMessage;
    return {
      id: userExists.id,
      name: userExists.name,
      cpf: userExists.cpf,
    }
  }
};

module.exports = loginValidateService;