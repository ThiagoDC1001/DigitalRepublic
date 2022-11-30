const AccountModel = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    balance: DataTypes.DECIMAL(10, 2),
  });

  Account.associate = (models) => {    
    Account.hasOne(models.User, {as: 'user', foreignKey: 'accountId'});
  }

  Account.associate = (models) => {
    Account.hasMany(models.Transaction, {foreignKey: 'debitedAccountId', as: 'debited'});
    Account.hasMany(models.Transaction, {foreignKey: 'creditedAccountId', as: 'credited'});
  }

  return Account;
}

module.exports = AccountModel;