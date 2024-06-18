// Estrutura de Repetição - FOR

const ler = require('readline-sync');

let x = ler.questionInt("Informe um Numero: ");

// Loop em Ordem Crescente
for (let i = 0; i <= x; i++) {
    console.log(i);
}

console.log("--------------------");

// Loop em Ordem Decrescente
for (let i = x; i  >= 0; i--) {
    console.log(i);    
}