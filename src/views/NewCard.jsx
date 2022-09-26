const React = require('react');
const Layout = require('./Layout');

function NewCard({ username }) {
  return (
    <Layout username={username}>
      <div>
        <form id="editEntryForm" action="/newcard/createNewCard" method="post" encType="multipart/form-data">
          <label htmlFor="title-input" className="block mar-b-1 cardText inputForm">Название:</label>
          <input
            id="title-input"
            name="title"
            type="text"
            // value={entry.title}
            tabIndex="1"
            className="block w-100 no-outline no-border pad-1 mar-b-2 inputForm"
          />
          <label htmlFor="body-textarea" className="block mar-b-1 cardText inputForm">Состояние:</label>
          <textarea
            id="body-textarea"
            name="condition"
            tabIndex="2"
            className="block w-100 h-10 no-resize no-outline no-border no-resize pad-1 mar-b-2 inputForm"
            // value={entry.body}
          />
          <label htmlFor="body-textarea" className="block mar-b-1 cardText inputForm">Город:</label>
          <input
            id="title-input"
            name="city"
            type="text"
            // value={entry.title}
            tabIndex="1"
            className="block w-100 no-outline no-border pad-1 mar-b-2 inputForm"
          />
          <label htmlFor="body-textarea" className="block mar-b-1 cardText inputForm">Цена:</label>
          <input
            id="title-input"
            name="price"
            type="text"
            // value={entry.title}
            tabIndex="1"
            className="block w-100 no-outline no-border pad-1 mar-b-2 inputText"
          />
          <input className="buttonStyle" type="file" name="photo" />
          <input
            type="submit"
            value="Создать"
            tabIndex="3"
            className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline inputText"
          />
        </form>
      </div>
    </Layout>
  );
}

module.exports = NewCard;
