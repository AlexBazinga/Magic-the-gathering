const { Card, User } = require('../db/models');

exports.buyCards = async (req, res) => {
  const cards = await Card.findAll({
    raw: true,
    where: { status: `cart_${req.session.user.id}` },
  });
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum += cards[i].price;
  }
  const buyer = await User.findOne({ where: { id: req.session.user.id } });
  console.log(sum);
  try {
    if (buyer.money >= sum) {
      const newMoney = buyer.money - sum;
      await User.update({
        money: newMoney,
      }, {
        where: { id: req.session.user.id },
      });
      for (let i = 0; i < cards.length; i++) {
        const seller = await User.findOne({ where: { id: cards[i].user_id } });
        const sellerMoney = seller.money + cards[i].price;
        await User.update({
          money: sellerMoney,
        }, {
          where: { id: seller.id },
        });

        await Card.update({
          user_id: req.session.user.id,
          status: 'buy',
        }, {
          where: { id: cards[i].id },
        });
      }
      res.sendStatus(200);
    } else { res.sendStatus(201); }
  } catch (error) {
    console.log('Не хватает денег!');
  }
};
