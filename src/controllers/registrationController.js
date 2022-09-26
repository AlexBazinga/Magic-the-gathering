const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const render = require('../lib/renderTemplate');
const Registration = require('../views/Registration');

exports.registerPage = (req, res) => {
  render(Registration, null, res);
};

exports.createUserAndSession = async (req, res) => {
  const { name, email, password } = req.body; // вытаскиваем инфу из инпута и кладем в константы
  try {
    const hashedPassword = await bcrypt.hash(password, 5); // шифруем пароль
    const user = await User.create({
      userName: name,
      email,
      password: hashedPassword,
      money: 3000,
    }); // записываем данные нового юзера в БД

    req.session.user = { id: user.id, name: user.userName }; // создаем новую сессию

    res.redirect('/'); // переходим на главную страницу
  } catch (error) {
    console.log('Create User Error ', error.message);
  }
};
