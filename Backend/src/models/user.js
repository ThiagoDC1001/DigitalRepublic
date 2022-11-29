const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
  });

  User.associate = (models) => {
    User.belongsTo(models.Account, {as: 'account', foreignKey: 'accountId'});
  }



  return User;
}

module.exports = UserModel;