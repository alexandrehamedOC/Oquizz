const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const authController = require('./controllers/authController');
const isLoggedMiddleware = require('./middlewares/isLoggedMiddleware');

const router = Router();

// On veut limiter l'acces a toutes les pages qui reference les quizz aux utilisateurs non connectes
router.get('/', isLoggedMiddleware, mainController.index);

// Levels
router.get('/levels', isLoggedMiddleware, levelController.list);
router.post('/levels', isLoggedMiddleware, levelController.create);

// Quiz
router.get('/quiz/:id', isLoggedMiddleware, quizController.findOne)

// Tags
router.get('/tags', isLoggedMiddleware, tagController.list)

// Authentification
router.get('/login', authController.loginPage)
router.post('/login', authController.loginAction)
router.get('/signup', authController.signupPage)
router.post('/signup', authController.signupAction)

module.exports = router;
