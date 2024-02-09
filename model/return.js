const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Return = sequelize.define('Return', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  bookname:{
    type:Sequelize.STRING,
    allowNull:false
  },
  booktime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  retuntime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fee:{
    type:Sequelize.INTEGER,
    allowNull:false
  }
});

module.exports = Return;
