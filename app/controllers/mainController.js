const { Quiz } = require("../models");

const mainController = {
  async index(req, res) {
    if (req.session.userId) {
      // Recuperer la liste de tous les quiz
      const quizzes = await Quiz.findAll({
        include: ['author', 'tags']
      })
      // Appelle de notre vue en passant la liste des quiz
      res.render('home', { quizzes });
    } else {
      res.status(401).render('404')
    }
  },
};

module.exports = mainController;
