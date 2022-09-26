const React = require('react');

function Layout({ children, username }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
        <script defer src="/js/client.js" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/style.css" />
        <title>Magic</title>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navbar">
            <a className="navbar-brand brandText" href="/">Magic: The Gathering</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse textNavBar" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Маркетплейс</a>
                </li>
                {username ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/personal">
                        Привет,
                        {' '}
                        {username}
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="/cart">Корзина</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">Выйти</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/registration">Регистрация</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Войти</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

      </head>
      <body className="layout">
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
