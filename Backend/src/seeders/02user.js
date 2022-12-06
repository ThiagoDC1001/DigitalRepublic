module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users', [{      
      name: 'Erika',
      cpf: '831.054.330-15',
      password: 'a4c986868837d86d7f24f5d2d278c49e',
      accountId: 1,
    }, {      
      name: 'Thiago',
      cpf: '317.255.752-99',
      password: '98ba5150709f5d78212cd07d234cfb98',
      accountId: 2,
    }])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};