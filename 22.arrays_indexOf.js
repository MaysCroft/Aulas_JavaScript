// Arrays - Vetores - Indice do Valor

let nomes = ["Marta", "Joao", "Jonas", "Maria", "Geralda", "Alice"];

const ler = require('readline-sync');

let nome = ler.question("Digite um Nome: ");

let x = nomes.indexOf(nome);

if (x >= 0) {
    console.log(`O Nome - ${nome} - está na posição - ${x} - no array Nomes.`);
} else {
    console.log(`O Nome - ${nome} - não existe no array Nomes.`);
}