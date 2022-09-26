module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'Биба',
        email: 'Biba@mail.ru',
        password: 'password',
        money: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Боба',
        email: 'Boba@mail.ru',
        password: 'password',
        money: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
