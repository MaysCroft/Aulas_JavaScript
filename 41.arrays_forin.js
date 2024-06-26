// Exibindo Valores de um Array com loop FOR IN

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

for (let animal in animais) {
    // console.log(animal);  Imprime SOMENTE as posições do Array
    console.log(`=> ${animais[animal]}`);
}