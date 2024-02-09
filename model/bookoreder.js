const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('Book', {
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
  order: {
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

module.exports = Book;
