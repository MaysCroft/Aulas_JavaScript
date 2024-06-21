// Utilizando o REALINE-SYNC para capturar dados para um Objeto Array Matriz

const ler = require('readline-sync');

let cliente = [];
let check = true;

while (check) {
    let nome = ler.question("- Digite seu Nome: ");
    let idade = ler.questionInt("- Informe sua Idade: ");
    let email = ler.question("- Digite seu E-mail: ");
    let carteira = ler.questionFloat("- Quanto ele tem de Dinheiro? R$ ");

    cliente.push({nome: nome, idade: idade, email: email, carteira: carteira});

    let x = ler.question("- Dados Armazenados! 'ENTER' Cadastrar outro Cliente ou 'SAIR' para Finalizar: ").toUpperCase();

    if (x === 'SAIR') {
        check = false;
        console.log("--- Cadastro Finalizado! ---");
    }
}

console.table(cliente);
check = true;

do {
    console.log("- Informe UMA das opções:");
    console.log("- 1. Listar Carteira do cliente com valor menor que R$ 100,00.");
    console.log("- 2. Listar Clientes em ordem alfabética.");
    console.log("- 3. Sair.");
    let opt = ler.questionInt("=> ");

    if (opt == 1) {
        cli_cart = cliente.filter(c => c.carteira < 100);
        console.table(cli_cart);
    } else if(opt == 2) {
        ordem_alfa = cliente.sort((a,b) => a.nome.localeCompare(b.nome));
        console.table(ordem_alfa);
    } else {
        check = false;
    }    
} while (check);

console.log("--- Sistema Finalizado! ---");