// Utilizando Arrow Function com IF e ELSE

const ler = require('readline-sync');

let verificarValor = (idade, tipo, valorIngresso) => {
    if (idade >= 18 && tipo === "NORMAL") {
        return valorIngresso - (valorIngresso * 0.25);
    } else if (idade>= 18 && tipo === "ESTUDANTE") {
        return valorIngresso - (valorIngresso * 0.50);
    } else if (idade >= 18 && tipo === "VIP") {
        return valorIngresso + (valorIngresso * 0.20);
    } else {
        return "--- Entrada não Permitida ou Ingresso Inválido! ---";
    }
}

let idade = ler.questionInt("- Digite sua Idade: ");
let tipo = ler.question("- Informe o Tipo do Ingresso: ").toUpperCase();
let valorIngresso = ler.questionFloat("- Digite o Valor do Ingresso: R$ ");

console.log(verificarValor(idade, tipo, valorIngresso));