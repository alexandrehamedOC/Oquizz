// @ts-check
const { Quiz, Level } = require('./app/models');

const pretty = (obj) => JSON.stringify(obj, null, 2);
const cpretty = (obj) => console.log(pretty(obj));

const example = async () => {
  const levels = await Level.findAll();
  cpretty(levels); // Affiche en console les données
};

const test1 = async () => {
  // Récupérer tous les quiz avec leurs thèmes (tag)
  const quizzes = await Quiz.findAll({
    include: [{
      association: 'tags',
    }],
  });
  cpretty(quizzes);
};

const test2 = async () => {
  // Récupérer le niveau "Confirmé" avec la description des questions associés
  const levelConfirmed = await Level.findOne({
    where: {
      name: 'Confirmé',
    },
    include: [{
      association: 'questions',
      // Si je ne souhaite récupérer que la description des questions
      attributes: ['description', 'id'],
    }],
  });

  cpretty(levelConfirmed);
};

const test3 = async () => {
  // Récupérer le quiz avec l'id 5 ainsi que ses questions + aux questions réponses
  const quiz = await Quiz.findByPk(5, {
    include: [{
      association: 'questions',
      // Pour récupérer les réponses des questions je me place
      // A côté de l'association sur mes questions
      include: [{
        association: 'answers',
      }],
    }],
  });

  cpretty(quiz);
};

const run = async () => {
  // await example();
  await test1();
  await test2();
  await test3();
};

run();
