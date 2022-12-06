const userService = require('../services/userService');


const userController = {
  async createUser(req, res) {
    const { name, cpf, password } = req.body;
    const user = await userService.createUser(name, cpf, password);
    res.status(201).json(user);
  },

  async findOne(req, _res) { 
    const { id } = req.params;
    const user = await userService.findOne({ where: {id}});
    return user;
  },

  async getAll(_req, res) {
    const users = await userService.getAll();
    res.status(200).json(users);
  }
}

module.exports = userController;