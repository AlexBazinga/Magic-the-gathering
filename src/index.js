require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const WebSocketServer = require('ws');

const app = express();

// импортируем роуты
const indexRouter = require('./routes/indexRouter');
const registrationRouter = require('./routes/registrationRouter');
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const personalRouter = require('./routes/personalRouter');
const cardinfoRouter = require('./routes/cardinfoRouter');
const cartRouter = require('./routes/cartRouter');
const newcardRouter = require('./routes/newcardRouter');

// подключаем необходимые для работы экспресс мидлвары
app.use(morgan('dev'));
app.use(express.static(path.resolve('public'))); // Статика есть
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  name: 'sid', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies из файла .env
  resave: false, // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 1, // время жизни cookies, ms (1 день)
  },
};

app.use(session(sessionConfig));
// записывает в переменную req.session.user данные из прилетевшей
// куки, если такаяже была найдена в базе данных для кук.
// если куки нету или она не найдена в session storage, то req.session.user будет равно unfefined

const wss = new WebSocketServer.Server({ port: 3014 });

wss.on('connection', (client) => {
  client.on('message', async (data) => {
    const messageFromClien = JSON.parse(data);
    wss.clients.forEach((everyClient) => {
      everyClient.send(JSON.stringify(messageFromClien));
    });
  });
});

app.use('/', indexRouter);

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.use('/personal', personalRouter);
app.use('/cart', cartRouter);
app.use('/cardinfo', cardinfoRouter);
app.use('/newcard', newcardRouter);

const { PORT } = process.env;
const { sequelize } = require('./db/models');
const { application } = require('express');

app.listen(PORT, async () => {
  console.log('\x1b[33m', `Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connection to database established');
  } catch (error) {
    console.log(error, 'Problem with connection to database');
  }
});
