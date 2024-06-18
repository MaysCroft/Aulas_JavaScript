// Estrutura de Repetição - WHILE - Condicional IF ELSE

const ler = require('readline-sync');

let num1 = 0;
let num2 = ler.questionInt("Digite um Numero: ");

while (num1 <= num2) {
    
    if (num1 === 101) {
        console.log("Contagem Pausada! Limite até 100!");
        break;
    } else {
        console.log(num1);
    }

    num1++;
}