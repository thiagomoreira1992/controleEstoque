const express = require('express');
const categoriaController = require('./controllers/categoriaController');

const routes = express.Router();
const CategoriaController = require('./controllers/categoriaController');
const ProfissionalController = require('./controllers/profissionalController');

routes.post('/criarCategoria', CategoriaController.criar);
routes.get('/listarCategoria', CategoriaController.listarTodos);
routes.post('/removerCategoria', CategoriaController.deletar);
routes.post('/alterarCategoria', CategoriaController.alterar);

routes.post('/criarProfissional', ProfissionalController.criar);
routes.get('/listarProfissional', ProfissionalController.listarTodos);
routes.post('/removerProfissional', ProfissionalController.deletar);
routes.post('/alterarProfissional', ProfissionalController.alterar);

routes.get('/', function(req,res){
    res.send('Teste');
});

module.exports = routes;