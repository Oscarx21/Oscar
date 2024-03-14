//Conexão com o banco
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postagens','root','123456',{
    host: "localhost",
    dialect:"mysql"
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}