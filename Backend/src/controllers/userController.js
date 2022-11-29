const userService = require('../services/userService');


const userController = {
  async createUser(req, res) {
    const { name, cpf } = req.body;
    const user = await userService.createUser(name, cpf);
    res.status(201).json(user);
  },

  async getAll(_req, res) {
    const users = await userService.getAll();
    res.status(200).json(users);
  }
}

module.exports = userController;