// Estrutura de Repetição - WHILE

const ler = require('readline-sync');

let num = ler.questionInt("Informe um Numero: ");

while (num > 0) {
    console.log(num);
    num--; // num = num - 1
}