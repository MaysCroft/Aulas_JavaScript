// Exibindo as Informações de um Objeto/Array com loop FOR EACH IN OF

let produtos = [
    { nome: "Teclado USB"      , preco: 99.90  , quantidade:  3 },
    { nome: "Mouse sem Fio"    , preco: 49.99  , quantidade:  5 },
    { nome: "Monitor 24 Pol"   , preco: 899.00 , quantidade:  2 },
    { nome: "HD Externo 1TB"   , preco: 299.90 , quantidade:  7 },
    { nome: "Notebook Dell"    , preco: 3499.99, quantidade:  1 },
    { nome: "Impressora Laser" , preco: 599.00 , quantidade:  4 },
    { nome: "Cadeira Gamer"    , preco: 799.90 , quantidade:  3 },
    { nome: "Headset Bluetooth", preco: 199.50 , quantidade:  6 },
    { nome: "Pendrive 32GB"    , preco: 29.90  , quantidade: 10 }
];

// Nomes dos Produtos com Valores MAIORES que R$500.00
produtos.forEach(produto => {
    if (produto.preco > 500) {
        console.log("------------------------------");
        console.log(`- Produto: ${produto.nome} \n- Valor: R$${produto.preco}`);
        console.log("------------------------------");
    }
});

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Nomes dos Produtos com Valor MENOR que R$300.00, a SOMA total de cada um e VALOR GERAL
let soma = 0, total = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 300) {
        soma = produtos[produto].preco *  produtos[produto].quantidade;
        total += soma; // total = total + soma
        console.log("------------------------------");
        console.log(`- Produto: ${produtos[produto].nome} \n- Total: R$${soma.toFixed(2)}`);
        console.log("------------------------------");
    }
}

console.log(`- Total Geral: R$${total.toFixed(2)}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Nomes dos Produtos MAIORES que R$800.00 e com Quantidades no estoque MENOR que 3
for (let produto of produtos) {
    if (produto.preco > 800 && produto.quantidade < 3) {
        console.log("------------------------------");
        console.log(`- Produto: ${produto.nome} \n- Quantidade: ${produto.quantidade}`);
        console.log("------------------------------");
    }   
}