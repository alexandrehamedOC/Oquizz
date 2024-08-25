const isLoggedMiddleware = (req, res, next) => {
    // Si l'utilisateur est connecte, on appelle simplement le controlleur de la route
    if (req.session.userId) {
        next()
    } else {
        // Si l'utilisateur n'est pas connecte
        // On peut renvoyer un status 401 (unauthorized) mais cela donne une indication sur le fait que la route
        // Sinon comme les repos github on peut carrement renvoye une 404 en faisant croire que la route n'existe pas
        // Ou bien on redirige tout simplement l'utilisateur vers le login
        res.redirect('/login')
    }
}

module.exports = isLoggedMiddleware;