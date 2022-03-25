
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mariadb://user:senha@localhost:3306/cestoque', {dialect: 'mariadb'});
const sequelize = new Sequelize('postgres://controleestoque:123456@localhost:5432/cestoque', {dialect: 'postgres'});

module.exports = sequelize;
