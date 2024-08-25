require('dotenv/config');
const express = require('express');
const { join } = require('path');
const router = require('./app/router');
const session = require('express-session');
const { User } = require('./app/models');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(session({
  resave: true, // la session est réenregistrée meme si elle n'est pas modifiée
  secret: process.env.SECRET, // ajoute une part d'aléatoire dans la génération des id de session imprédictible
  saveUninitialized: true, // génère un id de session pour tous ceux qui n'en ont pas encore
  cookie: {
    httpOnly: true, // Le cookie ne peut pas etre acceder par JS cote client
  }
}));

// On veut pouvoir acceder aux informations de l'utilisateur dans toutes nos vues. Les vues n'ayant pas acces a la session mais plutot aux locals, on transfere les informations depuis la session vers les locals
app.use(async (req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    const user = await User.findByPk(userId);
    res.locals.user = user;
  }
  next()
})

app.use(express.static(join(__dirname, 'public')));

// Pour lire les données des formulaires, il faut ajouter ce middleware
app.use(express.urlencoded({ extended: true }));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
