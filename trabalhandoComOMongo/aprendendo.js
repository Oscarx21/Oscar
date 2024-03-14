const mongoose = require('mongoose');

//Configurando o Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Bd",{
    useNewUrlParser: true
}).then(() => {
    console.log("conectado");
}).catch((erro) => {
    console.log("Houve um erro"+erro)
});

//Model - usuarios
//Definindo Model
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
        },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
}) 
//Collection
mongoose.model('Usuario', UsuarioSchema);

const Oscar = mongoose.model('Usuario');

//Inserindo dados
    new Oscar({
        nome: "TesASte",
        sobrenome: "TIO",
        email: "testando@hotmail.com",
        idade: 159,
        pais: "Peru"

    }).save().then(() =>{
        console.log("Usuario salvo");
    }).catch((erro) => {
        console.log("Erro ao salvar"+erro);
    })

