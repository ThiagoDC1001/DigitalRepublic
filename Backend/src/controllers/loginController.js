const loginService = require('../services/loginService');

const errorMessage = { status: 404, message: 'Not Found' };

const loginController = async (req, res) => {
  try {
    const { cpf, password } = req.body;
    if (!cpf || !password) throw new Error(res.status(404).json({message: "Usuário ou CPF não localizados"}));
    const token = await loginService.login(cpf, password);
    res.status(200).json({token});
  } catch (err) {
    console.log("Quebrou")
  }
};

module.exports = loginController;