const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <>
        <h2 className="textStyle">Добро пожаловать</h2>
        <form id="signinForm" method="POST" action="/login" className="labelPosition">
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
              minLength={4}
            />
          </div>
          <button type="submit" className="buttonLogin">
            Войти
          </button>
        </form>
        <form id="signupForm" method="GET" action="/registration">
          <button type="submit" className="buttonLogin">
            Регистрация
          </button>
        </form>
      </>
    </Layout>
  );
}

module.exports = Login;
