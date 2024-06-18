// Estrutura de Repetição - DO - WHILE

const ler =  require('readline-sync');

let soma = 0, num = 0;

do {
    soma += num; // soma = soma + num
    num = ler.questionInt("Digite um Numero ou -1 para Sair: ");
} while (num > 0);

console.log("A Soma dos Números Digitados é:" , soma);