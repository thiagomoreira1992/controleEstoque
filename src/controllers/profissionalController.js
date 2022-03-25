const Profissional = require('../models/profissional');

class ProfissionalController {
    async criar(req,res){
        const profissional = await Profissional.create({
            nome: req.body.nome,
            titulo: req.body.titulo
        })
        return res.json(profissional);
    }

    async listarTodos(req,res){
        const profissional = await Profissional.findAll();
        return res.json(profissional);
    }

    async alterar(req,res){
        const busca = await Profissional.findByPk(req.body.id);
        if(busca === null){
           return res.json("Profissional não encontrado!");
        }else{
            const profissional = await Profissional.update({nome: req.body.nome, tiutlo: req.body.titulo},{
                where: {
                    id: req.body.id
                }
            })
            return res.json(profissional);
        }
    }

    async deletar(req,res){ 
        const busca = await Profissional.findByPk(req.body.id);
        if(busca === null){
           return res.json("Profissional não encontrado!");
        }else{
            const profissional = await Profissional.destroy({
                where: {
                    id: req.body.id
                }
            })
            return res.json(profissional);
        }
    }
}

module.exports = new ProfissionalController;