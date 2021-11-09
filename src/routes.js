const express = require('express');
const categoriaController = require('./controllers/categoriaController');

const routes = express.Router();
const CategoriaController = require('./controllers/categoriaController');

routes.post('/criarCategoria', CategoriaController.criar);
routes.get('/listarCategoria', CategoriaController.listarTodos);
routes.post('/removerCategoria', CategoriaController.deletar);
routes.post('/alterarCategoria', CategoriaController.alterar);

routes.get('/', function(req,res){
    res.send('Teste');
});

module.exports = routes;