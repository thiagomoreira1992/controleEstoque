const Movimentacao = require('../models/movimentacao');
const Material = require('../models/material');
//const { BelongsTo, HasMany } = require('sequelize/types');

class MovimentacaoController {

    async criar(req, res) {
        const buscaMaterial = await Material.findOne({ where: { lote: `${req.body.lote}` } });
        console.log(buscaMaterial);
        if (buscaMaterial === null) {
            return res.json({ status: 404, body: 'Material não encontrado!' });
        } else {
            const movimentacao = await Movimentacao.create({
                idMaterial: buscaMaterial.id,
                quantidade: req.body.quantidade,
                lote: req.body.lote,
                profissional: req.body.profissional
            })

            let operacao = parseInt(buscaMaterial.quantidade) + parseInt(req.body.quantidade);

            const material = await Material.update({ quantidade: operacao }, {
                where: {
                    id: buscaMaterial.id
                }
            })
            return res.json({ status: 200, body: `Movimentação feita em ${buscaMaterial.nome}` });
            //return res.json(movimentacao);
        }
    }

    async listarTodos(req, res) {/*
        const movimentacao = await Movimentacao.findAll();
        let movimentacaoFiltrada;
        movimentacao.forEach(async element => {
            //console.log(element);
            let material = await Material.findOne({ where: { id: `${element.idMaterial}` } });
            try {
                if (await Material.findOne({ where: { id: `${element.idMaterial}` } }) === null) {
                    Object.assign(movimentacaoFiltrada, element);
                }
                /*if (JSON.stringify(material) === null) {
                    //
                    console.log(JSON.stringify(material));
                } else {
                }*//*
            } catch (err) {
                console.log(err);
            }
        });
        return res.json(movimentacaoFiltrada);*/

        /*const movimentacao = await Movimentacao.findAll({
            include: [{
                model: Material, 
                as: 'material',
                attributes: ['id'],
                required: true
            }]
        })
        return res.json(movimentacao);*/
        const movimentacao = await sequelize.query("SELECT movimentacaos.id, movimentacaos.\"idMaterial\", movimentacaos.quantidade, movimentacaos.lote, movimentacaos.profissional, movimentacaos.\"createdAt\", movimentacaos.\"updatedAt\" FROM movimentacaos inner JOIN materials ON materials.id = movimentacaos.\"idMaterial\";",{
            model: Movimentacao,
            mapToModel: true
        });
        return res.json(movimentacao);
    }

}

module.exports = new MovimentacaoController;