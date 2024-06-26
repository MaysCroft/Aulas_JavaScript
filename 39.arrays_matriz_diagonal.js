// Exibindo Valores de uma Matriz com FOR LOOP nas Diagonais

let numeros = [
    [12,  7, 34, 19, 20],
    [10, 89, 21, 65, 66],
    [25, 35, 47, 17,  6],
    [15, 71, 52, 61, 41],
    [ 5, 44, 54, 33, 87],
];

console.table(numeros);

console.log("-----");

// Exibir SOMENTE os Valores da Diagonal ESQUERDA da Matriz
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][i]);
}

console.log("-----");

// Exibir SOMENTE os Valores da Diagonal DIREITA da Matriz
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][numeros.length - i - 1]);
}

console.log("-----");