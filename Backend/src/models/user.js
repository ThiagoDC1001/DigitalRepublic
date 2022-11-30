const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(255),
    cpf: {
      type: DataTypes.STRING(255),
      UNIQUE: true,
    },
    password: DataTypes.STRING(255),
    accountId: DataTypes.INTEGER,
  }, 
  {
    timestamps: false,
    tableName: 'Users'
  });

  User.associate = (models) => {
    User.belongsTo(models.Account, {as: 'account', foreignKey: 'accountId'});
  }



  return User;
}

module.exports = UserModel;