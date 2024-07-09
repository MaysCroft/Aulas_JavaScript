// Utilizando Arrow Function com IF Ternário e Array com Objetos

let usuarios = [
    {nome: "Ana"    , idade: 22},
    {nome: "João"   , idade: 15},
    {nome: "Maria"  , idade: 25},
    {nome: "Pedro"  , idade: 18},
    {nome: "Mariana", idade: 17},
    {nome: "Carlos" , idade: 16},
    {nome: "Juliana", idade: 26},
    {nome: "Lucas"  , idade: 15},
    {nome: "Camila" , idade: 23}
];

let verificaIdade = usuario => {
    console.log(`- O Usuário ${usuario.nome} tem ${usuario.idade} anos e é ${usuario.idade >= 18 ? "Maior" : "Menor"} de Idade`);
};

// verificaIdade(usuarios[3]);

// for (let i = 0; i < usuarios.length; i++) {
//     verificaIdade(usuarios[i]);
// }

usuarios.forEach(verificaIdade);