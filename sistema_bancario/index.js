// index.js

const express = require("express");
const app = express();
const contaController = require("./controllers/contaController");

app.use(express.json());

// Rotas para cada operação
app.post("/contas", contaController.criarConta);
app.get("/contas/:numero", contaController.obterConta);
app.post("/deposito", contaController.deposito);
app.post("/saque", contaController.saque);
app.post("/transferencia", contaController.transferencia);

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
