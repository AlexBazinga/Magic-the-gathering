const React = require('react');
const Layout = require('./Layout');

function Home({ cards, username }) {
  return (
    <Layout username={username}>
      <div className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center" />
      <h2 className="textStyle">Главная страница</h2>
      <main role="main">
        <div className="searchStyle">
          <form id="searchForm">
            <select id="sel">
              <option value="name">По имени</option>
              <option value="city">По городу</option>
            </select>
            <input className="inputSearch" id="searchText" type="text" />
            <input className="inputButton" type="submit" value="Искать" />
          </form>
        </div>
        <ul id="cards" className="card-list no-bullets no-padding flex-container">
          {cards.map((card) => (
            card['User.userName'] === username ? (
              <li className="entry-item pad-b-4 liPoint" key={card.id}>
                <div className="entry-title font-2 pad-b-1-4 c-white cardName">{card.cardName}</div>
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
              </li>
            ) : (
              <li className="entry-item pad-b-4 liPoint" key={card.id}>
                <div className="entry-title font-2 pad-b-1-4 c-white cardName">{card.cardName}</div>
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
                <button className="buyBtn inCart" data-id={`${card.id}`}>В корзину</button>
              </li>
            )
          ))}
        </ul>
      </main>

    </Layout>
  );
}

module.exports = Home;
