const validator = require("validator");
const bcrypt = require("bcrypt");
const { User } = require("../models");
require("dotenv/config");

const authController = {
  loginPage(req, res) {
    res.render("login");
  },
  signupPage(req, res) {
    res.render("signup");
  },
  async signupAction(req, res) {
    // Si on rencontre la moindre erreur
    try {
      // Si on a un objet de type {firstname: 'quelqueChose', lastname: 'quelqueChose', email: 'quelqueChose', password: 'quelqueChose', confirmation}

      // On peut creer autant de variable que de proprietees de notre objet grace a la destructuration
      const { firstname, lastname, email, password, confirmation } = req.body;

      // Avoir tous les champs
      if (!firstname || !lastname || !email || !password || !confirmation) {
        throw new Error("Les champs sont tous obligatoires");
      }
      // Verification que l'email est bien valide
      if (!validator.isEmail(email)) {
        throw new Error("Il y a un probleme dans le formattage de l'email");
      }

      // password et confirmation identique
      if (password !== confirmation) {
        throw new Error("Les deux password ne sont pas identiques");
      }

      // Mdp assez robuste (taille minimale, caracteres speciaux, majuscule etc)
      const options = {
        minLength: 12,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      };
      if (!validator.isStrongPassword(password, options)) {
        throw new Error(
          "Le mot de passe doit comporter au moins 12 caracteres comprenant une maj, une min, un symbole et un chiffre. Utilise donc un gestionnaire de mot de passe"
        );
      }
      // Verifier que l'email est unique (qu'il n'existe pas deja en BDD)
      const userFound = await User.findOne({
        where: {
          email: email,
        },
      });

      // Si on a un trouve un utilisateur qui posse cet email, alors il ne faut pas l'ajouter
      if (userFound) {
        throw new Error("L email existe deja en BD");
      }

      // Arrive a ce stade on sait que l'utilisateur doit etre accepté
      // Hop hop hop, avant de stocker quoi que soit, on veut hacher le mot de passe
      // bcrypt (installer) => utiliser bcrypt.hash()
      const hash = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUND) || 10
      );

      // On veut se souvenir de ses informations et donc les stocker en BDD
      const newUser = await User.create({
        firstname: firstname,
        lastname: lastname,
        password: hash,
        email: email,
      });

      // On ajoute une variable userId qui contiendra l'id de l'utilisateur fraichement cree
      req.session.userId = newUser.id;

      res.redirect("/");
    } catch (error) {
      console.error(error.message);
      res.render("signup", { errorMessage: error.message });
    }
  },

  // Controlleur qui sera appelé lorsque l'on soumet le formulaire de connexion (login)
  async loginAction(req, res) {
    try {
      const { email, password } = req.body;

      // On vient chercher si un utilisateur correspond a l'email tape dans le formulaire
      const userFound = await User.findOne({
        where: {
          email: email,
        },
      });

      // Sequelize nous renvoi null si il ne trouve ou bien les infos du User trouve
      if (!userFound) {
        throw new Error("La combinaison email/mot de passe est invalide");
      }

      // Si jamais il y a bien un utilisateur avec cet email
      // Il faut verifier si le mot de passe correspond
      // Probleme on a acces qu'au hach du mot de passe
      // L'utilisateur lui nous envoi le mot de passe en clair
      const passwordMatched = await bcrypt.compare(
        password,
        userFound.password
      );

      // Si les deux mots de passe ne sont pas egaux, on renvoi une erreur
      if (!passwordMatched) {
        throw new Error("La combinaison email/mot de passe est invalide");
      }

      // On sait que le couple id/pwd est valide
      // On connecte donc l'utilisateur
      req.session.userId = userFound.id;

      // Si les infos sont correctes on redirige vers la liste des quizz (page d'accueil)
      res.redirect("/");
    } catch (error) {
      // Si il y a une erreur on renvoi le formulaire avec le message d'erreur
      res.render("login", { errorMessage: error.message });
    }
  },
};

module.exports = authController;
