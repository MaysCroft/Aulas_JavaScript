// Trabalhando com Funções no JavaScript - UTILIZANDO PARAMETROS

// Retorno com console.log INTERNO
function dobra(num) {
    let result = num * 2;
    console.log("- O Dobro do número informado é: " + result);
}

dobra(6);

// Retorno com console.log EXTERNAMENTE
function dobro(num) {
    return "- O Dobro do número informado é: " + num * 2;
}

console.log(dobro(6));

// Retorno para contar quantas letras tem um Texto ou Palavra
function contar_txt(txt) {
    total = txt.length;
    console.log("- O Texto ou Palavra digitada contém - " + total + " - caracteres.");
}

let texto = "Era uma vez em Nova Lima...";

contar_txt(texto);