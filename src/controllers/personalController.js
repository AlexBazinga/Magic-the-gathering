const render = require('../lib/renderTemplate');
const Personal = require('../views/Personal');
const { Card, User } = require('../db/models');

exports.personalPage = async (req, res) => {
  const name = req.session?.user?.name;
  const cards = await Card.findAll({
    where: { user_id: req.session?.user?.id },
    raw: true,
  });
  const user = await User.findOne({
    where: { id: req.session?.user?.id },
    raw: true,
  });
  console.log(user);
  render(Personal, { cards, user, username: name }, res);
};
