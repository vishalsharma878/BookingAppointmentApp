const Sequelize = require('sequelize');

const sequelize = require('../util/dbpath');

const User = sequelize.define('usertable', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
          type: Sequelize.STRING,
          allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.BIGINT,
        allowNull: false,
        
    }
})

module.exports = User;
