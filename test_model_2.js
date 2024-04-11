const { User } = require('./app/models/index');

const pretty = (data) => JSON.stringify(data, null, 2);
const cpretty = (data) => console.log(pretty(data));

async function run() {
  // Je prend comme point de départ le modèle User
  // Je vais chercher tous mes utilisateurs
  const user = await User.findAll({
    // Et je souhaite récupérer des informations associées à mes utilisateurs
    // User
    // include prend un tableau d'objet
    // chaque élément du tableau représente une relation
    include: [{
      // Je souhaite récupérer les quizzes de chaque utilisateur
      // `quizzes` est le nom de la relation défini dans le `as`
      association: 'quizzes',
      // Depuis Quiz
      include: [{
        // Je récupère les tags de chaque quiz
        association: 'tags',
      }, {
        // Je récupère les questions de chaque quiz
        association: 'questions',
        include: [{
          // Je récupère le niveau de chaque question
          association: 'level',
        }],
      }],
    }],
  });

  // include est un tableau d'objet.
  // ses objets vont avoir des propriétés (dont deux qui nous intéressent)
  // - association: le nom de la relation
  // - include: qui permet d'inclure des informations associées à la relation

  // Sequelize utilise une notion de get / set pour les attributs
  // Malheureusement, le console.log ne permet pas de voir les attributs get / set
  // Pour tricher, on peut faire
  // console.log(JSON.stringify(user, null, 2));
  // Pour se faciliter la vie, on a créer une fonction qui le fait.
  // On a juste à lui passé la donnée à afficher
  cpretty(user);
}

run();
