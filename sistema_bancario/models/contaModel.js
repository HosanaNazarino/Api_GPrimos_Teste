const contas = {};

function criarConta(numero, saldoInicial) {
    contas[numero] = { saldo: saldoInicial };
    return contas[numero];
}

function obterConta(numero) {
    return contas[numero];
}

function saldoAtualizado(numero, valor) {
    if (contas[numero]) {
        contas[numero].saldo += valor;
        return contas[numero];
    }
    return null;
}

function transferir(origem, destino, valor) {
    if (contas[origem] && contas[destino] && contas[origem].saldo >= valor) {
        contas[origem].saldo -= valor;
        contas[destino].saldo += valor;
        return { origem: contas[origem], destino: contas[destino] };
    }
    return null;
}

module.exports = {
    criarConta,
    obterConta,
    saldoAtualizado,
    transferir
};
