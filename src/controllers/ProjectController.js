const connection = require('../database/connection');

module.exports = {

  async index(req, res) {

    const projects = await connection('projects').select('*');
    return res.status(200).send(projects);

  },

  async store(req, res) {
    const { title, company, photo, authors } = req.body;

    const filteredAuthors = authors.toString().split(',')
      .map((item) => {
        return item;
    })


    const project = await connection('projects').insert({
      title,
      company,
      photo,
      authors: filteredAuthors
    });

    return res.status(200).send(project);
  }
}