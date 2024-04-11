const { Tag } = require("../models");

const tagController = {
  async list(req, res) {
    try {
      const tags = await Tag.findAll({
        include: 'quizzes'
      })
      res.render('tags', { tags });
    } catch (error) {
      console.error(error.message)
      res.status(500).render('500')
    }
  },
};

module.exports = tagController;
