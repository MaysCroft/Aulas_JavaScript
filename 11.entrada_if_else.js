// Entrada IF ELSE - Estrutura Condicional

const ler = require('readline-sync');

let nome = ler.question("- Informe o Nome do Aluno: ");
let nota1 = ler.questionFloat("- Informe a Nota 1: ");
let nota2 = ler.questionFloat("- Informe a Nota 2: ");
let nota3 = ler.questionFloat("- Informe a Nota 3: ");

let media = (nota1 + nota2 + nota3) /3;
media = media.toFixed(2); // Fixar a quantidade de casas decimais

if (media >= 60) {                                                        // Pode ser usado "+" ou "," para concatenar os resultados
    console.log("- Aluno(a) " + nome + " APROVADO, sua Nota: " + media);
} else if (media >= 30 && media <=59) {
    console.log("- Aluno(a)" , nome , "EM RECUPERAÇÃO, sua Nota:" , media); // Usando vírgula não precisa dar espaço
} else {
    console.log(`- Aluno(a) ${nome} REPROVADO, sua Nota: ${media}`);        // Usar crase na frase e chaves nas variáveis
}