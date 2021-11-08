const express = require('express');

const routes = express.Router();

routes.get('/', function(req,res){
    res.send('Teste');
});

module.exports = routes;