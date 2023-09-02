const Sequelize = require('sequelize');

const sequelize = new Sequelize('usersdata', 'root', 'Restin@2137', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;