const express = require('express');

const router = express.Router();

const { loginPage, checkUserAndSession } = require('../controllers/loginController');

router.get('/', loginPage);
router.post('/', checkUserAndSession);

module.exports = router;
