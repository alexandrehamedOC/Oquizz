const client = require('../db/client');

const levelDatamapper = {
  async findAll() {
    const result = await client.query(`
      SELECT * FROM "level"
    `);

    return result.rows;
  },

  async findById(id) {
    const result = await client.query(`
      SELECT * FROM "level"
      WHERE id = $1
    `, [
      id,
    ]);

    if (!result.rows.length) {
      return null;
    }

    return result.rows[0];
  },

  async insert(level) {
    const result = await client.query(`
      INSERT INTO "level" (name)
      VALUES ($1)
      RETURNING *
    `, [
      level.name,
    ]);

    return result.rows[0];
  },
};

module.exports = levelDatamapper;

class LevelDatamapper {
  static async findAll() {
    const result = await client.query(`
      SELECT * FROM "level"
    `);

    return result.rows;
  }

  static async findById(id) {
    const result = await client.query(`
      SELECT * FROM "level"
      WHERE id = $1
    `, [
      id,
    ]);

    if (!result.rows.length) {
      return null;
    }

    return result.rows[0];
  }

  static async insert(level) {
    const result = await client.query(`
      INSERT INTO "level" (name)
      VALUES ($1)
      RETURNING *
    `, [
      level.name,
    ]);

    return result.rows[0];
  }
}

levelDatamapper.findAll();
LevelDatamapper.findAll();
levelDatamapper.insert({
  name: 'Débutant',
});
LevelDatamapper.insert({
  name: 'Débutant',
});
