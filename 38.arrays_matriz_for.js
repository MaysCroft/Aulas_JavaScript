// Exibindo Valores de uma Matriz com FOR LOOP

let numeros = [
    [12,  7, 34, 19, 20],
    [10, 89, 21, 65, 66],
    [25, 35, 47, 17,  6],
    [15, 71, 52, 61, 41],
];

let sacolao = [
    ["Frutas" , "Legumes"  ],
    ["Abacaxi", "Abobrinha"],
    ["Uva"    , "Batata"   ],
    ["Abacate", "Cebola"   ],
    ["Maça"   , "Cenoura"  ],
    ["Banana" , "Pimentão" ],
];

let dados = [
    Frutas = ["Abacaxi", "Uva", "Abacate", "Maça", "Banana"],
    Legumes = ["Abobrinha", "Batata", "Cebola", "Cenoura", "Pimentão"],
];

// console.log(numeros.length);     Retorna o número de LINHAS da Matriz
// console.log(numeros[i].length);  Retorna o número de DADOS da posição da Matriz

for (let i = 0; i < numeros.length; i++) {         // Linha i
    for (let j = 0; j < numeros[i].length; j++) {  // Coluna j
        // console.log(numeros[i][j]);
        console.log(`- Linha ${i} - Coluna ${j}: ${numeros[i][j]}`);
    }
}

for (let x = 0; x < sacolao[0].length; x++) {   // Coluna x

    console.log(`[ ${sacolao[0][x]} ]`);        // Exibir os Titulos

    for (let y = 1; y < sacolao.length; y++) {  // Linha y
        console.log(sacolao[y][x]);
    }
}