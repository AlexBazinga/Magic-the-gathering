const React = require('react');
const Layout = require('./Layout');

function Chat({ card, user, username }) {
  return (
    <Layout username={username}>
      <>
        <div className="flex-container">
          <div className="chatText">
            <h2 className="textStyle">Информация о карте</h2>
            <h3 className="cardName">{card.cardName}</h3>
            <img className="cardInfo" src={`/images/${card.pic_url}`} alt="home_card" />
            <h3 className="cardText">
              {card.price}
              {' '}
              руб.
            </h3>
            <h3 className="cardText">{card.condition}</h3>
            <h3 className="cardText" id="userName">{user.userName}</h3>
          </div>
          <div className="chatStyle" id="chatText">
            <h2 className="cardName">чат</h2>
            <form id="chat">
              <input id="inputChat" type="text" />
              <input id="inputName" type="hidden" value={username} />
              <input className="submitBtn" type="submit" />
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
}

module.exports = Chat;
