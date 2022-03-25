const Sequelize = require('sequelize');
const database = require('../db');

const Profissional = database.define('profissional', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    titulo: {
        type: Sequelize.TEXT,
    }
})

module.exports = Profissional;