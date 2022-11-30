const transactionService = require('../services/transactionService');

const transactionController = {
  async makeTransaction(req, res) {
    const data = req.body;
    await transactionService.makeTransaction(data)
    res.status(200).json({message: 'Transaction Successful' })
  },

  async createTransaction(req, res) {
    const data = req.body;    
    await transactionService.createTransaction(data);
    res.status(201).json({ message: 'Transaction Successful' })
  },

  async transData (req, res) {
    const { id }  = req.params;
    const result = transactionService.transData(id);
    console.log(result)
    res.status(200).json(result)
  },

  async getAll (_req, res) {
    const all = await transactionService.getAll();
    res.status(200).json(all);
  }
}

module.exports = transactionController;