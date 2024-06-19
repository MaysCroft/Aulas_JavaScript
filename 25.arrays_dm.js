// Arrays - Manipulação de Dados

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];
let numeros = [12, 34, 51, 11, 78, 41, 23];

console.log("------------- Exibindo os Itens INICIAIS dos Arrays -------------");
console.log(animais);
console.log(numeros);
console.log("-----------------------------------------------------------------");

// Adicionar um valor no FINAL do Array
animais.push("Coelho");
numeros.push(88);

console.log("----- Exibindo com Novos Dados no FINAL dos Arrays -----");
console.log(animais);
console.log(numeros);
console.log("--------------------------------------------------------");

// Excluir um valor no FINAL do Array
animais.pop( );
numeros.pop( );

console.log("------------ Exibindo os Arrays SEM os Ultimos Dados ------------");
console.log(animais);
console.log(numeros);
console.log("-----------------------------------------------------------------");

// Adicionar um valor no INICIO do Array
animais.unshift("Jacaré");
numeros.unshift(99);

console.log("----- Exibindo com Novos Dados no INICIO dos Arrays -----");
console.log(animais);
console.log(numeros);
console.log("---------------------------------------------------------");

// Excluir um valor do INICIO do Array
animais.shift( );
numeros.shift( );

console.log("---------- Exibindo os Arrays SEM os Primeiros Dados ----------");
console.log(animais);
console.log(numeros);
console.log("---------------------------------------------------------------");

// Organizar os Dados do Array em ORDEM ALFABÉTICA
animais.sort( );
numeros.sort( );

console.log("------------- Exibindo os Arrays em ORDEM ALFABÉTICA -------------");
console.log(animais);
console.log(numeros);
console.log("------------------------------------------------------------------");

// Organizar os Dados do Array em ORDEM CONTRÁRIA
animais.reverse( );
numeros.reverse( );

console.log("------------- Exibindo os Arrays em ORDEM CONTRÁRIA -------------");
console.log(animais);
console.log(numeros);
console.log("-----------------------------------------------------------------");