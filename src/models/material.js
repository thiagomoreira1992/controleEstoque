const Sequelize = require('sequelize');
const database = require('../db');

const Material = database.define('material', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCategoria:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    validade:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    apresentacao:{
        type: Sequelize.TEXT,
    },
    lote:{
        type: Sequelize.STRING,
        allowNull: false
    },
    vigilancia:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    profissional:{
        type: Sequelize.INTEGER,
        allowNull: false
    }

})
module.exports = Material;