const render = require('../lib/renderTemplate');
const Cart = require('../views/Cart');

const { Card } = require('../db/models');

exports.cartPage = async (req, res) => {
  const name = req.session?.user?.name;
  console.log(`cart_${req.session.user.id}`);

  const cards = await Card.findAll({
    where: { status: `cart_${req.session.user.id}` },
    raw: true,
  })
  render(Cart, { username: name, cards }, res);

};
