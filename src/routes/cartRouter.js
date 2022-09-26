const express = require('express');

const router = express.Router();

const { cartPage } = require('../controllers/cartController');

const { isAuth } = require('../middlewares/functions');

const { buyCards } = require('../controllers/buyController');

router.get('/', isAuth, cartPage);

router.post('/buy', isAuth, buyCards);

module.exports = router;
