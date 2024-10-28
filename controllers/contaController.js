const contaModel = require("../models/contaModel");

function criarConta(req, res) {
    const { numero, saldoInicial } = req.body;
    const novaConta = contaModel.criarConta(numero, saldoInicial);
    res.status(201).json(novaConta);
}

function obterConta(req, res) {
    const { numero } = req.params;
    const conta = contaModel.obterConta(numero);
    if (conta) {
        res.json(conta);
    } else {
        res.status(404).json({ erro: "CONTA NÃO ENCONTRADA!" });
    }
}

function deposito(req, res) {
    const { numero, valor } = req.body;
    const conta = contaModel.saldoAtualizado(numero, valor);
    if (conta) {
        res.json(conta);
    } else {
        res.status(404).json({ erro: "CONTA NÃO ENCONTRADA!"});
    }
}

function saque(req, res) {
    const { numero, valor } = req.body;
    const conta = contaModel.obterConta(numero);
    if (!conta || conta.saldo < valor) {
        return res.status(400).json({ erro: "SALDO INSUFICIENTE" });
    }
    contaModel.saldoAtualizado(numero, -valor);
    res.json(conta);
}

function transferencia(req, res) {
    const { origem, destino, valor } = req.body;
    const resultado = contaModel.transferir(origem, destino, valor);
    if (resultado) {
        res.json(resultado);
    } else {
        res.status(400).json({ erro: "ERRO NA TRANFERENCIA. TENTE NOVAMENTE" });
    }
}

module.exports = {
    criarConta,
    obterConta,
    deposito,
    saque,
    transferencia
};
