// importação da biblioteca Express
// para instalar rode o comando : npm install express
const express = require ('express');
const bodyParser = require ('body-parser');
const fs = require('fs');

// Criação de um app Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importação das rotas
const rotas = require('./src/routes/Veiculo');

// método GET na rota raís
app.get("/", (req, res) => {
    // arquivo html obtido pelo fs
    const arquivo = fs.readFileSync('./src/pages/index.html')

    // resposta do servidor com arquivo html
    res.status(200).end(arquivo);
});

// configuração do server
const port = 8080;
const hostname = '127.0.0.1';

// utilizar as rotas
app.use('/veiculo', rotas);

// rodar a aplicação
app.listen(port, hostname, console.log(`O servidor está rodando! \nAcesse: http://${hostname}:${port}/`));