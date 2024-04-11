const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');

const router = Router();

router.get('/', mainController.index);

// Levels
router.get('/levels', levelController.list);
router.post('/levels', levelController.create);

// Quiz
router.get('/quiz/:id', quizController.findOne)

// Tags
router.get('/tags', tagController.list)

module.exports = router;
