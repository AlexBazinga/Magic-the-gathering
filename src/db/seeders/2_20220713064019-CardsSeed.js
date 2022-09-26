module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        cardName: 'Стойкий Единорог',
        pic_url: '1.png',
        price: 1500,
        condition: 'Идеальное',
        city: 'Липецк',
        status: 'sell',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Почётная Чернилодейка',
        pic_url: '2.png',
        price: 300,
        condition: 'Очень старая',
        city: 'Тамбов',
        status: 'sell',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Пылкая Ведунья Праха',
        pic_url: '3.png',
        price: 500,
        condition: 'Ни разу не прикасался',
        city: 'Липецк',
        status: 'sell',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cardName: 'Зелёная Хрень',
        pic_url: '4.png',
        price: 1000,
        condition: 'Вся в пыли и клее',
        city: 'Москва',
        status: 'sell',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
