const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');

const router = Router();

router.get('/', mainController.index);
router.get('/levels', levelController.list);
router.post('/levels', levelController.create);

module.exports = router;
