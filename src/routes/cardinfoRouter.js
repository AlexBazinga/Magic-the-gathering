const express = require('express');

const router = express.Router();

const { chatPage } = require('../controllers/cardChatController');
const { cardinfoPage, cardStatusChange, cardStatusChangeToCart } = require('../controllers/cardinfoController');

const { isAuth } = require('../middlewares/functions');

router.get('/:id', isAuth, cardinfoPage);
router.post('/sell', isAuth, cardStatusChange);
router.post('/cart', isAuth, cardStatusChangeToCart);

router.get('/chat/:id', isAuth, chatPage);

module.exports = router;
