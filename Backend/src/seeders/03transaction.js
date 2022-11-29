module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [{
      id: 1,
      value: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      creditedAccountId: 1,
      debitedAccountId: 2,
    }])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  },
};