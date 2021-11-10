const Material = require('../models/material');

class MaterialController {

    async criar(req, res) {
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
        return res.json(material);
    }

    async listarTodos(req, res) {
        const material = await Material.findAll();
        return res.json(material);
    }

    async alterar(req, res) {

        const busca = await Material.findByPk(req.body.id);
        let idCategoria = req.body.idCategoria.length<1 ? busca.idCategoria : req.body.idCategoria;
        let nome = req.body.nome.length<1 ? busca.nome : req.body.nome;
        let quantidade = req.body.quantidade.length<1 ? busca.quantidade : req.body.quantidade;
        let validade = req.body.validade.length<1 ? busca.validade : req.body.validade;
        let apresentacao = req.body.apresentacao.length<1 ? busca.apresentacao : req.body.apresentacao;
        let lote = req.body.lote.length<1? busca.lote : req.body.lote;
        let vigilancia = req.body.vigilancia.length<1 ? busca.vigilancia : req.body.vigilancia;
        let profissional = req.body.profissional.length<1 ? busca.profissional : req.body.profissional;
        console.log(req.body.lote.length);
        if (busca === null) {
            return res.json('Erro: Material não encontrado');
        } else {
            const material = await Material.update({
                idCategoria: idCategoria,
                nome: nome,
                quantidade: quantidade,
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