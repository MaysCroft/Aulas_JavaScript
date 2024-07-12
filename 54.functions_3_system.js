// Funções para o Main

const produtos = require('./54.functions_2_bd');
const ler = require('readline-sync');

const cadProduto = () => {
    let x = produtos.length; // Contar quantidade de produtos do Banco de Dados
    let id = x + 1;
    let nome = ler.question("- Digite o Nome do Produto: ");
    let quantidade = ler.questionInt("- Informe a Quantidade: ");
    let preco = ler.questionFloat("- Digite o Valor do Produto: R$ ");
    adicionarProduto(id, nome, quantidade, preco);
};

const adicionarProduto = (id, nome, quantidade, preco) => {
    produtos.push({id: id, nome: nome, quantidade: quantidade, preco: preco});
    console.log("-----------------------------------------");
    console.log("--- Produto Cadastrado com Sucesso!!! ---");
    console.log("-----------------------------------------");
    console.log(".....");
    ler.question("- Pressione ENTER para voltar ao MENU ");
    console.clear();
};

const atualizarProduto = () => {

    let check = true;
    while (check) {
        let id = ler.questionInt("- Informe a ID do Produto: ");
        let produto = produtos.find(prod => prod.id === id);
        if (produto) {
            console.log(
                `- ID: ${produto.id} -----
                 - Nome: ${produto.nome} 
                 - Quantidade: ${produto.quantidade} 
                 - Preço: R$ ${produto.preco}
                ------------------------------`
            );
            let opt = ler.questionInt("- Deseja alterar este produto? \n- 1. SIM \n- 2. NAO \n=> ");
            if (opt === 1) {
                console.clear();
                attProduto(id);
                check = false;
            } else {
                console.clear();
            }
        } else {
            console.clear();
            console.log(".....");
            console.log("--- Produto não encontrado!!! ---");
        }
    }
};

const attProduto = (id) => {
    let produto = produtos.find(prod => prod.id === id);
    let attnome = ler.question(`- Informe o Novo Nome do Produto: ${produto.nome}: `);
    let attqtd = ler.questionInt(`- Informe a Nova Quantidade: ${produto.quantidade}: `);
    let attpreco = ler.questionFloat(`- Informe o Novo Preco: R$ ${produto.preco}: R$ `);
    produto.nome = attnome;
    produto.quantidade = attqtd;
    produto.preco = attpreco;
    console.log("--- Produto Alterado com Sucesso!!! ---");
    console.log(
        `- ID: ${produto.id} -----
         - Nome: ${produto.nome} 
         - Quantidade: ${produto.quantidade} 
         - Preço: R$ ${produto.preco}
        ------------------------------`
    );
    console.log(".....");
    ler.question("- Pressione ENTER para voltar ao MENU ");
    console.clear();
};

const listarProduto = () => {
    console.log("--------------- Produtos Cadastrados ----------------");
    produtos.forEach(produto => console.log(
        `- ID: ${produto.id} -----
         - Nome: ${produto.nome} 
         - Quantidade: ${produto.quantidade} 
         - Preço: R$ ${produto.preco}
        ------------------------------`
    ));
    console.log("-----------------------------------------------------");
    console.log(".....");
    ler.question("- Pressione ENTER para voltar ao MENU ");
    console.clear();
};

const listarProdutoporId = () => {

    let check = true;
    while (check) {
        let id = ler.questionInt("- Informe a ID do Produto: ");
        let produto = produtos.find(prod => prod.id === id);
        if (produto) {
            console.log(
                `- ID: ${produto.id} -----
                 - Nome: ${produto.nome} 
                 - Quantidade: ${produto.quantidade} 
                 - Preço: R$ ${produto.preco}
                ------------------------------`
            );
            let opt = ler.questionInt("- Deseja buscar outro Produto? \n- 1. SIM \n- 2. NAO \n=> ");
            if (opt === 1) {
                console.clear();
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log(".....");
            console.log("--- Produto não encontrado!!! ---");
        }
    }
};

const excluirProduto = () => {

    let check = true;
    while (check) {
        let id = ler.questionInt("- Informe a ID do Produto: ");
        let produto = produtos.find(prod => prod.id === id);
        let id_ex = produtos.findIndex(prod => prod.id === id);
        if (produto) {
            console.log(
                `- ID: ${produto.id} -----
                 - Nome: ${produto.nome} 
                 - Quantidade: ${produto.quantidade} 
                 - Preço: R$ ${produto.preco}
                ------------------------------`
            );
            let opt = ler.questionInt("- Tem certeza que deseja EXCLUIR este Produto? \n- 1. SIM \n- 2. NAO \n=> ");
            if (opt === 1) {
                produtos.splice(id_ex, 1); // Ação de EXCLUIR o Produto
                console.log("--- Produto Excluído com Sucesso!!! ---");
                console.log(".....");
                ler.question("- Pressione ENTER para voltar ao MENU ");
                check = false;
            } else {
                check = false;
                console.clear();
            }
        } else {
            console.clear();
            console.log(".....");
            console.log("--- Produto não encontrado!!! ---");
        }
    }
};

module.exports = {cadProduto, atualizarProduto, listarProduto, listarProdutoporId, excluirProduto};