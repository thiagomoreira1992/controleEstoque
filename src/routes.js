const express = require('express');
const categoriaController = require('./controllers/categoriaController');

const routes = express.Router();
const CategoriaController = require('./controllers/categoriaController');
const ProfissionalController = require('./controllers/profissionalController');
const MaterialController = require('./controllers/materialController');
const MovimentacaoController = require('./controllers/movimentacaoController');

routes.post('/criarCategoria', CategoriaController.criar);
routes.get('/listarCategoria', CategoriaController.listarTodos);
routes.post('/removerCategoria', CategoriaController.deletar);
routes.post('/alterarCategoria', CategoriaController.alterar);

routes.post('/criarProfissional', ProfissionalController.criar);
routes.get('/listarProfissional', ProfissionalController.listarTodos);
routes.post('/removerProfissional', ProfissionalController.deletar);
routes.post('/alterarProfissional', ProfissionalController.alterar);

routes.post('/criarMaterial', MaterialController.criar);
routes.get('/listarMaterial', MaterialController.listarTodos);
routes.post('/removerMaterial', MaterialController.deletar);
routes.post('/alterarMaterial', MaterialController.alterar);
routes.get('/verificaValidade', MaterialController.verificaValidade);
routes.post('/listarIdCategoria', MaterialController.listarIdCategoria);
routes.post('/listarId', MaterialController.listarMaterial);

routes.post('/criarMovimentacao', MovimentacaoController.criar);
routes.get('/listarMovimentacao', MovimentacaoController.listarTodos);

routes.get('/', function(req,res){
    res.send('Teste');
});

module.exports = routes;