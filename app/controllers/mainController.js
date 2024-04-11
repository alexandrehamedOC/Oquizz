const { Quiz } = require("../models");

function display(data) {
  return JSON.stringify(data, null, 2);
}

const mainController = {
  async index(req, res) {
    // Recuperer la liste de tous les quiz
    const quizzes = await Quiz.findAll({
      include: ['author', 'tags']
    })
    // Appelle de notre vue en passant la liste des quiz
    res.render('home', { quizzes });
  },
};

module.exports = mainController;
