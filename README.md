# Sistema de Transações Bancárias

Este é um sistema de transações bancárias básico, construído em JavaScript usando Node.js e Express, que permite criar contas bancárias, realizar depósitos, saques e transferências entre contas.

## Funcionalidades

- **Criação de Conta Bancária** : Cria uma conta com um número único e saldo inicial.
- **Consulta de Conta** : Permite visualizar o saldo de uma conta específica.
- **Depósito** : Adiciona um valor ao saldo da conta.
- **Saque** : Subtrai um valor do saldo da conta, verificando se há saldo suficiente.
- **Transferência** : Transfere valores entre duas contas, garantindo que a conta de origem tenha saldo suficiente.

## Estrutura do Projeto

- **index.js**: Configuração e inicialização do servidor Express, define as rotas principais da API.
- **controllers/contaController.js**: Controlador responsável por processar as requisições e interagir com o modelo de conta.
- **models/contaModel.js**: Modelo que gerencia a lógica de manipulação dos dados das contas (criação, atualização de saldo e transferências).

**Obs**: A linguagem que foi utilizada é a pedida no enunciado do teste. https://gist.github.com/gp-breno/71e3f5e0b85b97c79911037d8643e81e
