module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Accounts', [{
      balance: 4000,
    },
    {      
      balance: 5000,
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};