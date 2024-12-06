// Importando bibliotecas
const express = require('express');

// Manipulando rotas
const rotas = express.Router();

// método POST
rotas.post("/", (req, res) => {
    // Criando um arquivo Json com os dados passados pelo corpo de requisição
    const veiculo = {
        nome : req.body.nome,
        fabricante : req.body.fabricante,
        ano : req.body.ano,
        modelo : req.body.modelo,
        combustivel : req.body.combustivel,
        cor : req.body.cor,
        preco : req.body.preco
    };

    // Mostrando os resultados
    res.send(veiculo).statusCode(201);
});

// método PUT
rotas.put("/", (req, res) => {
    const id = req.body.id;
    const preco = req.body.preco;

    res.send(`O veículo de ID: ${id} teve seu preço atualizado para R$${preco}.`).status(200);
});

// método DELETE
rotas.delete("/:id", (req, res) => {
    // coletando o id para deleção
    const id = req.params.id;

    res.status(202).send(`O veículo de ID: ${id} foi excluído.`);
});

// Exportando rotas
module.exports = rotas;