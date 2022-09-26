const express = require('express');

const router = express.Router();

const { personalPage } = require('../controllers/personalController');

const { isAuth } = require('../middlewares/functions');

router.get('/', isAuth, personalPage);

module.exports = router;
