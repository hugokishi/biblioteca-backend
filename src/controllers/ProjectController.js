const connection = require('../database/connection');

module.exports = {

  async index(req, res) {

    const projects = await connection('projects').select('*');
    return res.status(200).send(projects);

  },
}