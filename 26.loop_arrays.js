// Exibindo os Dados do Array utilizando Loop FOR

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];
let numeros = [12, 34, 51, 11, 78, 41, 23];

console.log("----- Listando os Animais do Array -----");
for (let i = 0; i < animais.length; i++) {
    console.log(`=> ${animais[i]}`);
}
console.log("----------------------------------------");

console.log("----- Listando os Números do Array -----");
for (let i = 0; i < numeros.length; i++) {
    console.log(`- Valor => ${numeros[i]}`);
}
console.log("----------------------------------------");