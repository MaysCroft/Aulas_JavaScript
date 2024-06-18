// Estrutura de Repetição - FOR - Condicional IF ELSE

const ler = require('readline-sync');

const C = 5; // Critério de Contagem
let x = ler.questionInt("Digite um Numero: ");
let cont = C;

for (let i = 0; i <= x; i++) {

    console.log(i);

    if (i >= cont) {
        let sair = ler.question("'ENTER' Continuar Contando ou 'SAIR' para Finalizar: ");
        sair = sair.toUpperCase();
        if (sair === "SAIR" || i == x) {
            console.log("Contagem Finalizada!");
            break;
        }
        cont += C;
    }
}