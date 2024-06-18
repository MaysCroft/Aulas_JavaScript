// Entrada de Dados do Usuário

const readline = require('readline');

const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Digite um Número: ", (num1) => {
    ler.question("Digite outro Número: ", (num2) => {
        let soma = Number(num1) + Number(num2);
        console.log("O Resultado da Soma é: " + soma);

        ler.close();
    })
});