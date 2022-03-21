const Movimentacao = require('../models/movimentacao');
const Material = require('../models/material');
const sequelize = require('../db');

class MovimentacaoController{
    
    async criar(req,res){
        const buscaMaterial = await Material.findOne({where: {lote: `${req.body.lote}`}});
        console.log(buscaMaterial);
        if(buscaMaterial === null){
            return res.json({status: 404, body: 'Material não encontrado!'});
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
            return res.json({status: 200, body: `Movimentação feita em ${buscaMaterial.nome}`});
            //return res.json(movimentacao);
        }
    }
    
    async listarTodos(req,res){
        //const movimentacao = await Movimentacao.findAll();
        const movimentacao = await sequelize.query("SELECT movimentacaos.id, movimentacaos.\"idMaterial\", movimentacaos.quantidade, movimentacaos.lote, movimentacaos.profissional, movimentacaos.\"createdAt\", movimentacaos.\"updatedAt\" FROM movimentacaos inner JOIN materials ON materials.id = movimentacaos.\"idMaterial\";",{
            model: Movimentacao,
            mapToModel: true
        });
        return res.json(movimentacao);
    }

}

module.exports = new MovimentacaoController;