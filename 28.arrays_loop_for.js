// Ordenando valores do Array com FOR

let numeros = [12, 34, 51, 11, 78, 41, 23];

console.log("------------------");

// Listar os Dados do Array
for (let i = 0; i < numeros.length; i++) {
    console.log(`- Posição ${i}:  ${numeros[i]}`);
}

console.log("------------------");

// Listar os Dados do Array INVERTIDOS
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`- Posição ${i}:  ${numeros[i]}`);
}

console.log("------------------");

// Listar os Dados do Array, PULANDO ALGUNS DADOS
for (let i = 0; i < numeros.length; i+=2) {
    console.log(`- Posição ${i}: ${numeros[i]}`);
}

console.log("------------------");