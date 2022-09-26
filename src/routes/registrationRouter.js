const express = require('express');
const { isValid } = require('../middlewares/functions'); // функция проверки что все поля реги заполнены

const router = express.Router();

const { registerPage, createUserAndSession } = require('../controllers/registrationController');

router.get('/', registerPage);
router.post('/', isValid, createUserAndSession);

module.exports = router;
