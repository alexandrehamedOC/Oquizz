const { Level } = require('../models');

const levelController = {
  async list(req, res) {
    const levels = await Level.findAll();
    // Pour vérifier le contenu, on peut utiliser le JSON.stringify
    console.log(JSON.stringify(levels, null, 2));
    res.render('levels', {
      levels,
    });
  },

  async create(req, res) {
    // J'utilise les données dans le body de la requête pour créer mon level
    await Level.create({
      name: req.body.name,
    });
    res.redirect('/levels');
  },
};

module.exports = levelController;
