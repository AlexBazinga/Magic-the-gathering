const React = require('react');
const Layout = require('./Layout');

function CardInfo({ card, user, username }) {
  return (
    <Layout username={username}>
      <>
        <div className="textStyle">
          <h3 className="cardName2">{card.cardName}</h3>
          <div className="cardInfo">
            <img className="cardInfo" src={`/images/${card.pic_url}`} alt="home_card" />
          </div>
          <h3 className="cardText">
            Состояние:
            {' '}
            {card.condition}

          </h3>
          <h3 className="cardText">
            Цена:
            {' '}
            {card.price}
            {' '}
            руб.

          </h3>
          <h3 className="cardText">
            Город:
            {' '}
            {card.city}

          </h3>
          <h3 className="cardText">
            Владелец:
            {' '}
            {user.userName}

          </h3>
        </div>
        <button className="buttonStyle"><a href={`/cardinfo/chat/${card.id}`}>Начать чат</a></button>
      </>
    </Layout>
  );
}

module.exports = CardInfo;
