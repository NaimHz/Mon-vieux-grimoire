const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', multer, stuffCtrl.getAllStuff);
router.post('/', auth, multer, stuffCtrl.createBook);
router.get('/:id', multer, stuffCtrl.getOneBook);
router.put('/:id', auth, multer, stuffCtrl.modifyBook);
router.delete('/:id', auth, stuffCtrl.deleteBook);

module.exports = router;