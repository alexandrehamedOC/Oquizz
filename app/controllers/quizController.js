const { Quiz } = require("../models");

const quizController = {
  async findOne(req, res) {
    try {
      // On recupere le parametre d'url defini dans la route parametree (ici id)
      // Ici on recoit une STRING, il vaut mieux la convertir en nombre
      const quizId = parseInt(req.params.id);
      const quiz = await Quiz.findByPk(quizId, {
        include: ['author', 'tags', {
          association: 'questions',
          include: ['level', 'answers']
        }]
      })

      // Attention peut etre que le quizz demande n'exsite pas en base
      if (!quiz) {

        // On renvoi la page d'erreur 404 car cela veut dire que le quizz n'existe pas en bdd
        res.status(404).render('404')
        // Attention si on ne return rien on va demander au serveur de faire 2 rendus (impossible)
        return
      }

      res.render('quiz', { quiz })
    } catch (error) {
      console.error(error.message)
      res.status(500).render('500')
    }
  },
};

module.exports = quizController;
