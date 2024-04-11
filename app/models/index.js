// Ce fichier va servir à regrouper tous les modèles de notre application
const Answer = require('./Answer');
const Level = require('./Level');
const Question = require('./Question');
const Quiz = require('./Quiz');
const Tag = require('./Tag');
const User = require('./User');

// User <-> Quiz (One-To-Many)
// Mon user à plusieurs Quiz
User.hasMany(Quiz, {
  foreignKey: 'author_id', // La clé étrangère qui permet de faire le lien
  as: 'quizzes', // Le nom de la relation User.findOne({ include: ['quizzes'] })
});
// Un quiz appartient à un utilisateur
Quiz.belongsTo(User, {
  foreignKey: 'author_id', // La clé étrangère qui permet de faire le lien
  as: 'author', // Le nom de la relation Quiz.findOne({ include: ['author'] })
});

// Quiz <-> Question (One-To-Many)
// Un quiz a plusieurs questions
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions', // Quiz.findOne({ include: ['questions'] })
});
// Une question appartient à un quiz
Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz', // Question.findOne({ include: ['quiz'] })
});

// Level <-> Question (One-To-Many)
// Un niveau a plusieurs questions
Level.hasMany(Question, {
  foreignKey: 'level_id',
  as: 'questions', // Level.findOne({ include: ['questions'] })
});
// Une question appartient à un niveau
Question.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level', // Question.findOne({ include: ['level'] })
});

// Question <-> Answer (One-To-Many)
// Une question a plusieurs réponses
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers', // Question.findOne({ include: ['answers'] })
});
// Une réponse appartient à une question
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question', // Answer.findOne({ include: ['question'] })
});

// Quiz <-> Tag (Many-To-Many)
// Un quiz a plusieurs tags
Quiz.belongsToMany(Tag, {
  through: 'quiz_has_tag', // Je précise le nom de la table de liaison
  as: 'tags', // Quiz.findOne({ include: ['tags'] })
  // J'ai ici deux clés étrangères à préciser
  // La clé étrangère pour mon modèle Courant (ici Quiz)
  foreignKey: 'quiz_id',
  // Puis je dois renseigner la deuxième clé étrangère pour le modèle cible (ici Tag)
  otherKey: 'tag_id',
});
// Un tag à plusieurs quiz
Tag.belongsToMany(Quiz, {
  through: 'quiz_has_tag', // Je précise le nom de la table de liaison
  as: 'quizzes', // Tag.findOne({ include: ['quizzes'] })
  // J'ai ici deux clés étrangères à préciser
  // La clé étrangère pour mon modèle Courant (ici Tag)
  foreignKey: 'tag_id',
  // Puis je dois renseigner la deuxième clé étrangère pour le modèle cible (ici Quiz)
  otherKey: 'quiz_id',
});

// Question <-> Answer (One-To-One) la bonne réponse
// Ma question a une bonne réponse
// L'id de la bonne réponse est stocker dans la table question
// C'est donc Question qui à l'association belongsTo
Question.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'good_answer', // Question.findOne({ include: ['good_answer'] })
});
// La bonne réponse à une question
Answer.hasOne(Question, {
  foreignKey: 'answer_id',
  as: 'targeted_question', // Answer.findOne({ include: ['targeted_question'] })
});

module.exports = {
  Answer,
  Level,
  Question,
  Quiz,
  Tag,
  User,
};
