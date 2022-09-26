const React = require('react');
const Layout = require('./Layout');

function Personal({ cards, user, username }) {
  return (
    <Layout username={username}>
      <h2 className="textStyle">Личный Кабинет</h2>
      <h2 className="money">
        Баланс:
        {' '}
        {user.money}
        {' '}
        руб.
      </h2>
      <p>
        <form className="buttonStyle" id="creatCart" method="get" action="/newcard">
          <input className="inputText" type="submit" value="Добавить карту" />
        </form>
      </p>
      <div className="sellDiv flex-container">
        {cards.map((card) => (
          card.status === 'sell' ? (
            <div className="liPoint">
              <h2 className="cardName2">В продаже</h2>
              <h3 className="cardName">{card.cardName}</h3>
              <a href={`/cardinfo/${card.id}`}><img className="cardInfo" src={`/images/${card.pic_url}`} alt="personal_card" /></a>
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
                {username}

              </h3>
              <button className="buttonStyle"><a href={`/cardinfo/chat/${card.id}`}>Чат</a></button>
              <button className="cancelSell buttonPersonal" data-id={`${card.id}`}>Отменить продажу</button>
            </div>
          ) : (
            <div>
              <h2 className="cardName10">Это фича</h2>
              <h3 className="cardName">{card.cardName}</h3>
              <a href={`/cardinfo/${card.id}`}><img className="cardInfo" src={`/images/${card.pic_url}`} alt="personal_card" /></a>
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
                {username}

              </h3>
              <button className="buttonStyle"><a href={`/cardinfo/chat/${card.id}`}>Чат</a></button>
              <button className="Sell buttonPersonal" data-id={`${card.id}`}>Продать</button>
            </div>
          )
        ))}
      </div>

    </Layout>
  );
}

module.exports = Personal;
