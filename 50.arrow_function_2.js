// Arrow Functions Simples - Aplicando calculos de Desconto

// function result(valor, desconto) {
//     return valor - (valor * (desconto / 100));
// }
// console.log(result(125.99, 15).toFixed(2));

const ler = require('readline-sync');

let result = (valor, desconto) => valor - (valor * (desconto / 100));

let valor = ler.questionFloat("- Digite um Valor: R$ ");
let desconto = ler.questionFloat("- Informe qual sera o Desconoto %: ");

let valorDesc = result(valor, desconto).toFixed(2);

console.log(`- O Valor de R$ ${valor} com desconto de ${desconto}% seráde R$ ${valorDesc}`);