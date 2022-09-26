const render = require('../lib/renderTemplate');
const NewCard = require('../views/NewCard');
const { User } = require('../db/models');
const { Card } = require('../db/models');

exports.newcardPage = (req, res) => {
  const name = req.session?.user?.name;
  render(NewCard, { username: name }, res);
};
exports.createNewCard = async (req, res) => { // multer создает req.file
  try {
    const findUser = await User.findOne({ where: { id: req.session.user.id } }); // ищем юзера
    const newCard = await Card.create({ // создаем карту
      cardName: req.body.title,
      pic_url: req.file.filename,
      price: req.body.price,
      city: req.body.city,
      status: 'buy',
      condition: req.body.condition,
      user_id: findUser.id,
    }, {
      returning: true, // хз
      plain: true, // хз
    });

    res.redirect(`/cardinfo/${newCard.id}`); // редирект на созданную карточку
  } catch (error) {
    res.send(error.message);
  }
};
