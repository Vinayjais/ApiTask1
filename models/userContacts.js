const Sequelize = require('sequelize');
const database = require('../util/database');

  const userConstacts = database.define('userConstacts',{
     
       id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
  },
    name:Sequelize.STRING,
    number:{
        type: Sequelize.STRING,
        unique: false
    },
    userId: Sequelize.INTEGER
  
});

module.exports = userConstacts;