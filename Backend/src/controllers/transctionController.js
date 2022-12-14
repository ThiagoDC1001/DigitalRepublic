const transactionService = require('../services/transactionService');

const transactionController = {
  async makeTransaction(req, res) {    
    const data = req.body;    
      const bolinha = await transactionService.makeTransaction(data)
      if(bolinha) {
        res.status(200).json({message: 'Transação efetuada com sucesso' })
      } else {res.status(404).json({message: 'Saldo insuficiente'})}
    },  

  async findById (req, res) {
    const { id }  = req.params;
    const result = await transactionService.findById(id);
    console.log(result)    
    res.status(200).json(result)
  },

  async getAll (_req, res) {
    const all = await transactionService.getAll();
    res.status(200).json(all);
  }
}

module.exports = transactionController;