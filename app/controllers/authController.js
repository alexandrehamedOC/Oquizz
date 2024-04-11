const authController = {
    loginPage(req, res) {
        res.render('login')
    },
    signupPage(req, res) {
        res.render('signup')
    }
}

module.exports = authController;