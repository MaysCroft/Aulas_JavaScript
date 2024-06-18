// Blocos de Variáveis Locais e Globais

let num1 = 100; // Variável Global, está fora do bloco
let num2 = 2;
    {
        let num2 = 30; // Variável Local, está dentro do bloco
        console.log(num1);
        console.log(num2);
           {
               console.log(num2);
           }
    }

console.log(num1);
console.log(num2);