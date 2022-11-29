module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [{      
      name: 'Rafinha dos Santos',
      cpf: '487.501.680-88',
      accountId: 1,
    }, {      
      name: 'Lucca da Silva Sauro',
      cpf: '824.166.110-03',
      accountId: 2,
    }])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};