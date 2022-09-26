const express = require('express');

const router = express.Router();
const path = require('path');
const multer = require('multer'); // подключаем multer

const { newcardPage, createNewCard } = require('../controllers/newcardController');

const { isAuth } = require('../middlewares/functions');

const storageConfig = multer.diskStorage({ // создаем конфиг multer
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images')); // папка куда multer сохраняет картинки
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date()}_${file.originalname}`); // правила для имени req.file.filename
  },
});

router.get('/', isAuth, newcardPage);
router.post('/createNewCard', multer({ storage: storageConfig }).single('photo'), createNewCard);


module.exports = router;
