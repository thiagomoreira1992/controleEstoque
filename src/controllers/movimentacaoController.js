const Movimentacao = require('../models/movimentacao');
const Material = require('../models/material');

class MovimentacaoController{
    
    async criar(req,res){
        const movimentacao = await Movimentacao.create({
            idMaterial: req.body.material,
            quantidade : req.body.quantidade,
            lote :req.body.lote,
            profissional : req.body.profissional
        })
        const buscaMaterial = await Material.findByPk(req.body.material);
        let operacao = parseInt(buscaMaterial.quantidade) + parseInt(req.body.quantidade);

        const material = await Material.update({quantidade: operacao},{
            where:{
                id: req.body.material
            }
        })
        return res.json(material + movimentacao);
        //return res.json(movimentacao);
    }
    
    async listarTodos(req,res){
        const movimentacao = await Movimentacao.findAll();
        return res.json(movimentacao);
    }

}

module.exports = new MovimentacaoController;