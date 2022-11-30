module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [{
      balance: 1000,
    },
    {      
      balance: 1000,
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};