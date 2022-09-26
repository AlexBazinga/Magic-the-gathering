const React = require('react');
const Layout = require('./Layout');

function Cart({ username, cards }) {
  return (
    <Layout username={username}>
      {cards.length > 0
        ? (
          <>
            <ul className="card-list no-bullets no-padding flex-container">
              {cards.map((card) => (
                <li className="entry-item pad-b-4 liPoint" key={card.id}>
                  <div className="entry-title font-2 pad-b-1-4 c-white cardText cardName">{card.cardName}</div>
                  <a href={`/cardinfo/${card.id}`}><img className="cardInfo" src={`/images/${card.pic_url}`} alt="home_card" /></a>
                  <p className="entry-condition cardText">
                    Состояние:
                    {' '}
                    {card.condition}

                  </p>
                  <p className="entry-price cardText">
                    Цена:
                    {' '}
                    {card.price}
                    {' '}
                    руб.

                  </p>
                  <p id="city" className="entry-city cardText">
                    Город:
                    {' '}
                    {card.city}

                  </p>
                  <p className="entry-city cardText">
                    Владелец:
                    {' '}
                    {card['User.userName']}

                  </p>
                  <button className="cartCancelSell buyCart2" data-id={`${card.id}`}>Отменить покупку</button>
                </li>
              ))}
            </ul>
            <p className="entry-city cardText">
              {' '}
              Покупка на сумму
              {' '}
              {cards.reduce((sum, card) => (sum + card.price), 0)}
              {' '}
              руб.
            </p>
            <button className="buyCart">Купить</button>
          </>
        ) : (
          <h2 className="entry-city cardText">Корзина пуста</h2>
        )}
    </Layout>
  );
}

module.exports = Cart;
