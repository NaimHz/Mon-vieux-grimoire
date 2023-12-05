const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.get('/bestrating', stuffCtrl.getBestRating);
router.get('/:id', stuffCtrl.getOneBook);

router.post('/', auth, multer, stuffCtrl.createBook);
router.post('/:id/rating', auth, stuffCtrl.addNote);

router.delete('/:id', auth, stuffCtrl.deleteBook);


module.exports = router;