const registerService = require('../services/registerService');

const registerController = async (req, res) => {
  const data = req.body
  const token = await registerService.create(data);
  res.status(201).json(token);
}

module.exports = registerController;