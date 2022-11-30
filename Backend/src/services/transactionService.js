const models = require('../models');

const transactionService = {
  
  async createTransaction(data) {    
    const { dataValues } = await models.Transaction.create({
      debitedAccountId: `${data.debitedAccountId}`,
      creditedAccountId: `${data.creditedAccountId}`,
      value: `${data.value}`
    })    
    return dataValues;
  },
  
  async debitando(id, value) {
    const result = await models.Account.findOne({
      where: { id }   
    })    
    const balanceDebited = Number(result.balance) - Number(value);
    result.update({ balance: balanceDebited })
    return balanceDebited;
  },
  
  async creditando(id, value) {
    const result = await models.Account.findOne({
      where: { id }   
    });
    const balanceCredited = Number(result.balance) + Number(value);
    result.update({ balance: balanceCredited })
    return balanceCredited;
  },
  
  async makeTransaction(data) { 
    // validacoes
    const create = await this.createTransaction(data);
    const debito = await this.debitando(create.debitedAccountId, create.value)
    const credito = await this.creditando(create.creditedAccountId, create.value)
    console.log(debito, credito)
    return;
  },

  
  async getAll() {
    const all = await models.Transaction.findAll(
      { attributes: ['id', 'value', 'creditedAccountId', 'debitedAccountId']},
    );
    const allTrans = all.map((e) => e.dataValues);
    return allTrans;
  }
};

module.exports = transactionService;