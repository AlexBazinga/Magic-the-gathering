const render = require('../lib/renderTemplate');
const CardInfo = require('../views/CardInfo');

const { Card, User } = require('../db/models');

exports.cardinfoPage = async (req, res) => {
  console.log('cardinfoPage');
  const username = req.session?.user?.name;
  const card = await Card.findOne({
    where: { id: req.params.id },
    raw: true,
  });
  const user = await User.findOne({ where: { id: card.user_id } });
  render(CardInfo, { card, user, username }, res);
};

exports.cardStatusChange = async (req, res) => {
  const { cardId, status } = req.body;
  console.log(req.body);
  const card = await Card.update({
    status,
  }, {
    where: { id: cardId },
  });
  res.sendStatus(200);
};

exports.cardStatusChangeToCart = async (req, res) => {
  const userId = req.session?.user?.id;
  const { cardId, status } = req.body;
  console.log(req.body);
  const card = await Card.update({
    status: `${status}_${userId}`,
  }, {
    where: { id: cardId },
  });
  res.sendStatus(200);
};
