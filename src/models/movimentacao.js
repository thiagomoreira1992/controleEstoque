const Sequelize = require('sequelize');
const database = require('../db');

const Movimentacao = database.define('movimentacao',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idMaterial:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lote:{
        type: Sequelize.STRING,
        allowNull: false
    },
    profissional:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Movimentacao;