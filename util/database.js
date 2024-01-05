const Sequelize = require('sequelize');

let sequelize = new Sequelize('task','root','password',{
    dialect:'mysql',
    host:'localhost'
})


module.exports = sequelize;
