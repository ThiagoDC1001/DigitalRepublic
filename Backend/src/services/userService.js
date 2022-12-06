const models = require('../models');
// const Account = require('../models');

const INITIAL_VALUE_BALANCE = 4000;

const userService = {

  async findOne(id) {
    const user = await models.User.findOne(id)    
    return user;
  },

  async getAll() {
    const users = await models.User.findAll(
      { attributes: ['id', 'name', 'cpf', 'accountId']},
    );
    const allUsers = users.map((e) => e.dataValues);
    return allUsers;
  }

}

module.exports = userService;