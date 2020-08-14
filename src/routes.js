const routes = require('express').Router();
const ProjectController = require('./controllers/ProjectController');

routes
  .get('/obras', ProjectController.index);



module.exports = routes;