/*Criando tabela e inserindo dados*/

CREATE TABLE usuario(
    cod_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(50),
    email_usuario VARCHAR(60),
    senha_usuario VARCHAR(15)
);

INSERT INTO usuario(nome_usuario,email_usuario,senha_usuario) VALUES (
    "Oscar","oscarcoradi95@hotmail.com","99216618");