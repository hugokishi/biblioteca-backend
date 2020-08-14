const routes = require('express').Router();
const ProjectController = require('./controllers/ProjectController');

routes
  .get('/obras', ProjectController.index)
  .post('/obras', ProjectController.store)




module.exports = routes;