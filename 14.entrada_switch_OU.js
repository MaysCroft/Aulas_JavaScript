// Entrada de Opções Utilizando Condicional OU no Switch Case

const ler = require("readline-sync");

let porta = ler.question("Escolha uma Porta: \n- A \n- B \n- C \n- D \n: ");

switch (porta) {
    case 'A':
    case 'a':
        console.log("A Porta - A - foi Aberta!");
        break;

    case 'B':
    case 'b':
        console.log("A Porta - B - foi Aberta!");
        break;

    case 'C':
    case 'c':
        console.log("A Porta - C - foi Aberta!");
        break;

    case 'D':
    case 'd':
        console.log("A Porta - D - foi Aberta!");
        break;

    default:
        console.log("Opção Inválida!");
        break;
}