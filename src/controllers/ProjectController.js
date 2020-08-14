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
  },

  async delete(req, res) {
    const { id } = req.params;

    const project = await connection('projects')
      .where('id', id)
      .select('*')
      .first();

    if (!project) {
      return res.send({ error: 'Project not found!' })
    }

    await connection('projects')
      .where('id', id)
      .delete();

    return res.send();
  },

  async updt(req, res) {
    const { id } = req.params;
    const { title, company, photo, authors } = req.body;

    const project = await connection('projects')
      .where('id', id)
      .select('*')
      .first();

    if (!project) {
      return res.send({ error: 'Project not found!' })
    }

    const filteredAuthors = authors.toString().split(',')
      .map((item) => {
        return item;
      })
    
    const projects = await connection('projects')
      .where('id', id)
      .update({
        title,
        company,
        photo,
        authors: filteredAuthors
      });

    return res.json(projects);
  }
}