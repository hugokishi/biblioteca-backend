const routes = require('express').Router();
const ProjectController = require('./controllers/ProjectController');

routes
  .get('/obras', ProjectController.index)
  .post('/obras', ProjectController.store)
  .delete('/obras/:id', ProjectController.delete)
  .put('/obras/:id', ProjectController.updt)

module.exports = routes;