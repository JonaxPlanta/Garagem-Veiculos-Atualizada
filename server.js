// importação da biblioteca Express
// para instalar rode o comando : npm install express
const express = require ('express');

const bodyParser = require ('body-parser');

// Criação de um app Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importação das rotas
const veiculoRotas = require('./routes/Veiculo');

// Config do server
const port = 8080;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    res.send('Está é a raiz do Servidor.')
})

// Utilizar as rotas
app.use('/veiculo', veiculoRotas);

//Rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));