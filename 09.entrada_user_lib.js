// Entrada de Dados Utilizando a Biblioteca readline-sync

const ler = require('readline-sync');

let num1 = ler.questionInt("- Digite um Numero: ");
let num2 = ler.questionInt("- Digite outro Numero: ");

let soma = num1 + num2;

console.log("- O Resultado da Soma é: " + soma);