const express = require('expres');

const routes = express.routes();

routes.get('/', function(req,res){
    res.send('Teste');
});

module.exports = routes;