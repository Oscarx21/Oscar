//teste para executar o servidor
var http = require("http");

http.createServer(function(req,res){
    res.end("Hello Words");
}).listen(8081);

console.log("O servidor está executando na porta 8081");