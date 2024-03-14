//Se conectar ao banco e criar tabela

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','123456',{
    host: "localhost",
    dialect:"mysql"
})
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com o banco de dados");
}).catch(function(erro){
    console.log("Falha ao se conectar"+erro);
})*/

//Postagem
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})


const usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

usuario.create({
    nome:"Oscar",
    sobrenome: "Rocha",
    email: "testeeemail@gmail.com",
    idade: 85
})
//usuario.sync({force:true}) 