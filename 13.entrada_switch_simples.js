// Entrada Usuário Condicional Escolha Caso (Switch Case)

const ler = require('readline-sync');

console.log("---------------- MENU INICIAL ----------------");
console.log("*** Informe o Valor do Empréstimo: ***");
let valor = ler.questionFloat("=> R$ ");

console.clear();  //Limpar a Tela

console.log("---------- MENU OPÇÕES DE PAGAMENTO ----------");
console.log("- 1. PIX \n- 2. DÉBITO \n- 3. CRÉDITO \n- 4. DINHEIRO");
let opt = ler.questionInt("=> ");
let result = 0;
console.log("----------------------------------------------");

switch (opt) {
    case 1:
        result = valor += valor * 0.15;
        console.log("- PIX Acréscimo de 15%");
        console.log(`- Realizando o pagamento via PIX o valor ficará em: R$ ${result}`);
        break;

    case 2:
        result = valor += valor * 0.20;
        console.log("- DÉBITO Acréscimo de 20%");
        console.log(`- Realizando o pagamento via DÉBITO o valor ficará em: R$ ${result}`);
        break;

    case 3:
        result = valor += valor * 0.30;
        console.log("- CRÉDITO Acréscimo de 30%");
        console.log(`- Realizando o pagamento via CRÉDITO o valor ficará em: R$ ${result}`);
        break;

    case 4:
        result = valor += valor * 0.10;
        console.log("- DINHEIRO Acréscimo de 10%");
        console.log(`- Realizando o pagamento via DINHEIRO o valor ficará em: R$ ${result}`);
        break;

    default:
        console.log("--- Opção Inválida! ---");
        break;
}