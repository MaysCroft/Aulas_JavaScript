// Excluir e Adicionar Dados no Arrays - SPLICE

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let animais_removidos = animais.splice(1,2); // A PARTIR da Posição 'X' do Array, vai REMOVER'X' Quantidade

console.log(animais_removidos);
console.log(animais);

console.log("----------------------------------");
animais.splice(1, 0, "Urso", "Jacaré", "Esquilo");
console.log(animais);
console.log("----------------------------------");