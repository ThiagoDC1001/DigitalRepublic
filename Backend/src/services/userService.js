const models = require('../models');
// const Account = require('../models');

const INITIAL_VALUE_BALANCE = 100;

const userService = {
  async createUser(name, cpf) {
    const balance = INITIAL_VALUE_BALANCE;
    const account = await models.Account.create({ balance });
    const userUser = await models.User.create({ accountId: account.id, name, cpf });
    return userUser;
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