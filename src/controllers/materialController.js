const Material = require('../models/material');
const Categoria = require('../models/categoria');
const { Op } = require('sequelize');
const moment = require('moment');

class MaterialController {

    async criar(req, res) {
        const buscaMaterial = await Material.findOne({ where: { lote: `${req.body.lote}` } });
        console.log(buscaMaterial)
        if (buscaMaterial === null) {
            const material = await Material.create({
                idCategoria: req.body.idCategoria,
                nome: req.body.nome,
                quantidade: req.body.quantidade,
                validade: req.body.validade,
                apresentacao: req.body.apresentacao,
                lote: req.body.lote,
                vigilancia: req.body.vigilancia,
                profissional: req.body.profissional
            })
            return res.json({ status: 200, body: `Movimentação feita em ${material.nome}` });
        } else {
            return res.json({ status: 404, body: 'Material já existe, favor usar a movimentação' });
        }
    }

    async listarTodos(req, res) {
        const material = await Material.findAll();
        return res.json(material);
    }

    async listarIdCategoria(req, res) {
        console.log(req.body.nome);
        const buscaCategoria = await Categoria.findOne(
            {
                where: {
                    nome: {
                        [Op.like]: `${req.body.nome}`
                    }
                }
            });
        console.log(buscaCategoria);
        if (buscaCategoria) {
            const material = await Material.findAll({ where: { idCategoria: `${buscaCategoria.id}` } });
            return res.json(material);
        }
    }

    async listarMaterial(req, res){
        const material = await Material.findByPk(req.body.id);
        return res.json(material);
    }

    async verificaValidade(req, res) {
        const firstDay = moment().format("YYYY-MM-DD");
        const lastDay = moment().add(1, 'months').endOf('month').format("YYYY-MM-DD");
        console.log(firstDay + "  -  " + lastDay);
        const material = await Material.findAll({
            where: {
                validade:
                {
                    [Op.and]: {
                        [Op.gte]: firstDay,
                        [Op.lte]: lastDay
                    }
                }
            }
        })

        return res.json(material);
    }

    async alterar(req, res) {
        console.log(req.body.idCategoria);
        const busca = await Material.findByPk(req.body.id);
        let idCategoria = req.body.idCategoria.length < 1 ? busca.idCategoria : req.body.idCategoria;
        let nome = req.body.nome.length < 1 ? busca.nome : req.body.nome;        
        let validade = req.body.validade.length < 1 ? busca.validade : req.body.validade;
        let apresentacao = req.body.apresentacao.length < 1 ? busca.apresentacao : req.body.apresentacao;
        let lote = req.body.lote.length < 1 ? busca.lote : req.body.lote;
        let vigilancia = req.body.vigilancia.length < 1 ? busca.vigilancia : req.body.vigilancia;
        let profissional = req.body.profissional.length < 1 ? busca.profissional : req.body.profissional;
        console.log(req.body.lote.length);
        if (busca === null) {
            return res.json('Erro: Material não encontrado');
        } else {
            const material = await Material.update({
                idCategoria: idCategoria,
                nome: nome,
                validade: validade,
                apresentacao: apresentacao,
                lote: lote,
                vigilancia: vigilancia,
                profissional: profissional
            }, {
                where: {
                    id: req.body.id
                }
            })
            return res.json(material);
        }
    }

    async deletar(req, res) {
        const busca = await Material.findByPk(req.body.id);
        if (busca === null) {
            return res.json('Erro: Material não encontrado');
        } else {
            const material = await Material.destroy({
                where: {
                    id: req.body.id
                }
            })
            return res.json(material);
        }
    }
}



module.exports = new MaterialController;