const Categoria = require('../models/categoria');

class CategoriaController {
    async criar(req, res) {
        const categoria = await Categoria.create({
            nome: req.body.nome
        })
        return res.json(categoria);
    }

    async listarTodos(req, res) {
        const categoria = await Categoria.findAll();
        return res.json(categoria);
    }

    async alterar(req, res) {
        const busca = await Categoria.findByPk(req.body.id);
        if (busca === null) {
            return res.json("Categoria não encontrada");
        } else {
            const categoria = await Categoria.update({ nome: req.body.nome }, {
                where: {
                    id: req.body.id
                }
            });
            return res.json(categoria);
        }
    }

    async deletar(req, res) {
        const busca = await Categoria.findByPk(req.body.id);
        if (busca === null) {
            return res.json("Categoria não encontrada");
        } else {
            const categoria = await Categoria.destroy({
                where: {
                    id: req.body.id
                }
            });
            return res.json(categoria);
        }
    }
}

module.exports = new CategoriaController;