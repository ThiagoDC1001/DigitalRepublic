module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [{
      id: 1,
      value: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      creditedAccountId: 1,
      debitedAccountId: 2,
    },
  {
    id: 2,
    value: 1000,
    createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    creditedAccountId: 2,
    debitedAccountId: 1,
  }])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  },
};