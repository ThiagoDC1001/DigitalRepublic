const TransactionModel = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    value: DataTypes.DECIMAL(10,2),
    creditedAccountId: DataTypes.INTEGER,
    debitedAccountId: DataTypes.INTEGER,
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Account, {as: 'debited', foreignKey: 'debitedAccountId'});
    Transaction.belongsTo(models.Account, {as: 'credited', foreignKey: 'creditedAccountId'});
  }

  return Transaction;
}

module.exports = TransactionModel;