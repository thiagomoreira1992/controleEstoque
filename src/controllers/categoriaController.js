const Categoria = require('../models/categoria');

class CatergoriaController {
    async criar(req, res){
        const categoria = await Categoria.create({
            nome: req.body.nome
        })
        return res.json(categoria);
    }

    async alterar(){}

    async deletar(){}
}