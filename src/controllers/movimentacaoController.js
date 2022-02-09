const Movimentacao = require('../models/movimentacao');
const Material = require('../models/material');

class MovimentacaoController{
    
    async criar(req,res){
        const buscaMaterial = await Material.findOne({where: {lote: `${req.body.lote}`}});
        console.log(buscaMaterial);
        if(buscaMaterial === null){
            return res.json('Material não encontrado!');
        }else{            
            const movimentacao = await Movimentacao.create({
                idMaterial: buscaMaterial.id,
                quantidade : req.body.quantidade,
                lote :req.body.lote,
                profissional : req.body.profissional
            })
            
            let operacao = parseInt(buscaMaterial.quantidade) + parseInt(req.body.quantidade);
    
            const material = await Material.update({quantidade: operacao},{
                where:{
                    id: buscaMaterial.id
                }
            })
            return res.json(material + movimentacao);
            //return res.json(movimentacao);
        }
    }
    
    async listarTodos(req,res){
        const movimentacao = await Movimentacao.findAll();
        return res.json(movimentacao);
    }

}

module.exports = new MovimentacaoController;