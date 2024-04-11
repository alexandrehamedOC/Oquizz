const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const authController = require('./controllers/authController');

const router = Router();

router.get('/', mainController.index);

// Levels
router.get('/levels', levelController.list);
router.post('/levels', levelController.create);

// Quiz
router.get('/quiz/:id', quizController.findOne)

// Tags
router.get('/tags', tagController.list)

// Authentification
router.get('/login', authController.loginPage)
router.get('/signup', authController.signupPage)
router.post('/signup', authController.signupAction)

module.exports = router;
