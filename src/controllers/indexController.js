const render = require('../lib/renderTemplate');
const Home = require('../views/Home');
const { Card, User } = require('../db/models');

exports.indexPage = async (req, res) => {
  const cards = await Card.findAll({ raw: true, include: { model: User }, where: { status: 'sell' } });
  const username = req.session?.user?.name;
  render(Home, { cards, username }, res);
};
