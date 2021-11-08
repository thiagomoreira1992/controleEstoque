const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mariadb://api:ecomax2005@localhost:3306/cestoque', {dialect: 'mariadb'});
const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/cestoque', {dialect: 'postgres'});

module.exports = sequelize;