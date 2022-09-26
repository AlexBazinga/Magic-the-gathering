const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <>
        <h2 className="textStyle">Регистрация</h2>
        <form className="labelPosition" id="signupForm" method="POST" action="/registration">
          <div className="form-group">
            <label>Логин:</label>
            <input
              id="name"
              className="inputForm"
              name="name"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              placeholder="Минимум 4 символа"
              minLength={4}
              title="Латинские буквы, цифры и _"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              id="email"
              className="inputForm"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
              placeholder="SomeEmail@domen.ru"
              required
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input
              id="password"
              className="inputForm"
              name="password"
              type="password"
              placeholder="Минимум 4 знака"
              required
              minLength={3}
            />
          </div>
          <button type="submit" className="buttonLogin">
            Зарегистрироваться
          </button>
        </form>
      </>
    </Layout>
  );
}

module.exports = Registration;
