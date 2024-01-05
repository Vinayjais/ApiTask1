const Sequelize = require('sequelize');

let sequelize = new Sequelize('task','root','241021@Vinay',{
    dialect:'mysql',
    host:'localhost'
})


module.exports = sequelize;