const models = require('../models');

const transactionService = {
  
  async makeTransaction(data) {     
    const debitedAccountId = await models.User.findOne({ where: { cpf: data.debitedCpf }})     
    const creditedAccountId = await models.User.findOne({ where: { cpf: data.creditedCpf }})   
    
      const bolinha = this.calculating(debitedAccountId, creditedAccountId, data.transferValue);
      this.createTransaction(debitedAccountId, creditedAccountId, data.transferValue);      
      return bolinha;
    
  },
  
  async calculating(debitedAccountId, creditedAccountId, value) {    
      const debited = await models.Account.findOne({ where: { id: debitedAccountId.accountId } })    
      const credited = await models.Account.findOne({ where: { id: creditedAccountId.accountId } })    
      if(Number(debited.balance) < Number(value))  return false;   
      const balanceDebited = Number(debited.balance) - Number(value);
      const balanceCredited = Number(credited.balance) + Number(value);
      debited.update({ balance: balanceDebited });
      credited.update({ balance: balanceCredited });
      return true;    
  },
  

  async createTransaction(debitedAccountId, creditedAccountId, transferValue) {       
    const { dataValues } = await models.Transaction.create({
      debitedAccountId: `${debitedAccountId.accountId}`,
      creditedAccountId: `${creditedAccountId.accountId}`,
      value: `${transferValue}`
    })    
    return dataValues;
  },

  
  async getAll() {
    const all = await models.Transaction.findAll(
      { attributes: ['id', 'value', 'creditedAccountId', 'debitedAccountId']},
    );
    const allTrans = all.map((e) => e.dataValues);
    return allTrans;
  },

  async findById(id) {
    const { dataValues } = await models.Transaction.findOne({ where: { id}})    
    return dataValues;
  }
};

module.exports = transactionService;