const render = require('../lib/renderTemplate');
const Chat = require('../views/Chat');

const { Card, User } = require('../db/models');

exports.chatPage = async (req, res) => {
  const card = await Card.findOne({
    where: { id: req.params.id },
    raw: true,
  });
  const user = await User.findOne({ where: { id: card.user_id } });
  console.log(card);
  const username = req.session?.user?.name;
  render(Chat, { card, user, username }, res);
};
