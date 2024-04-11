const validator = require('validator');
const { User } = require('../models');

const authController = {
    loginPage(req, res) {
        res.render('login')
    },
    signupPage(req, res) {
        res.render('signup')
    },
    async signupAction(req, res) {
        // Si on rencontre la moindre erreur
        try {
            // Si on a un objet de type {firstname: 'quelqueChose', lastname: 'quelqueChose', email: 'quelqueChose', password: 'quelqueChose', confirmation}

            // On peut creer autant de variable que de proprietees de notre objet grace a la destructuration
            const { firstname, lastname, email, password, confirmation } = req.body;

            // Avoir tous les champs
            if (!firstname || !lastname || !email || !password || !confirmation) {
                throw new Error('Les champs sont tous obligatoires')
            }
            // Verification que l'email est bien valide
            if (!validator.isEmail(email)) {
                throw new Error('L email doit etre correct')
            }

            // password et confirmation identique
            if (password !== confirmation) {
                throw new Error('Les deux password ne sont pas identiques')
            }

            // Mdp assez robuste (taille minimale, caracteres speciaux, majuscule etc)
            const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }
            if (validator.isStrongPassword(password, options)) {
                throw new Error('Le mot de passe doit comporter au moins 12 caracteres comprenant une maj, une min, un symbole et un chiffre. Utilise donc un gestionnaire de mot de passe')
            }
            // Verifier que l'email est unique (qu'il n'existe pas deja en BDD)
            const userFound = await User.findOne({
                where: {
                    email: email
                }
            })

            // Si on a un trouve un utilisateur qui posse cet email, alors il ne faut pas l'ajouter
            if (userFound) {
                throw new Error('L email existe deja en BD')
            }

            // Arrive a ce stade on sait que l'utilisateur doit etre accepté
            // Hop hop hop, avant de stocker quoi que soit, on veut hacher le mot de passe
            // bcrypt (installer) => utiliser bcrypt.hash()
            // On veut se souvenir de ses informations et donc les stocker en BDD
            await User.create({
                firstname: firstname,
                lastname: lastname,
                password: password,
            })

            // Ajouter une variable dans la session d'express (pour cela utiliser le package express-session, ajouter le middleware dans l'index puis ajouter une variable isLogged a la session)

            res.redirect('/')

        } catch (error) {
            res.render('signup', { errorMessage: error.message })
        }
    }
}

module.exports = authController;