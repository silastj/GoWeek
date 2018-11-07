// declarando uma variavel e importanto o express nela
const express = require('express');
// tb vamos importa e declarar a variavel
const mongoose = require('mongoose');

const cors = require('cors');

// declarando uma variavel app e chamando uma funcao
const app = express();

// retirar o servidor http com o app express, isso vai habilitar que o nosso servidor ouça tb o protocolo ws
const server = require('http').Server(app);
// essa variavel io vai guarda os dados usuarios que estao conectados em tempo real
const io = require('socket.io')(server);





// conectando com o mongoose
mongoose.connect('mongodb://goweek:goweek123@ds057476.mlab.com:57476/goweek-silas',{
    useNewUrlParser: true
});

// iremos deixar a variavel disponivel para todos utilizar, criando um 
//quando a gente receber uma requisao eu posso interceptar ela e adicionar mais informacoes

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());


// vou forca e informa para o express que vou utilizar json para todas as requisicoes 
app.use(express.json());

// importar as routas
app.use(require('./routes'));

// Preciso alocar  essa minha aplicacao em um endereco numa maquina,geralmente aloca em uma porta
server.listen(3000, () => {
    console.log(':)Server started on port 3000'); // Nossa funcao ela é executada quando o nosso servidor subir
});

