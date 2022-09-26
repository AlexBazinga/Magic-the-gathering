const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const render = require('../lib/renderTemplate');
const Login = require('../views/Login');

const failAuth = (res, err) => res.status(401).json({ err });

exports.loginPage = (req, res) => {
  render(Login, null, res);
};

exports.checkUserAndSession = async (req, res) => {
  const { email, password } = req.body; // вытаскиваем инфу из инпута и кладем в константы
  try {
    const user = await User.findOne({ where: { email } }); // ищем юзера с введенным мылом в БД
    if (!user) return res.sendStatus(201); // если не находим выдаем ошибку

    const isValidPassword = await bcrypt.compare(password, user.password); // сравниваем пароли
    if (!isValidPassword) return res.sendStatus(201);

    req.session.user = { id: user.id, name: user.userName }; // создаем сессию

    res.sendStatus(200);
  } catch (error) {
    console.log('Login User Error ', error.message);
  }
};
