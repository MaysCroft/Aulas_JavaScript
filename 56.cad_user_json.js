// Cadastro de Usuário utilizando JSON

const fs = require('fs');
const ler = require('readline-sync');

const arquivoJSON = '56.dados.json';
let users = [];

if (!fs.existsSync(arquivoJSON)) {
    const dados_ini = [];
    fs.writeFileSync(arquivoJSON, JSON.stringify(dados_ini, null, 2), 'utf-8')
}

let usersJson = fs.readFileSync(arquivoJSON,'utf-8');
users = JSON.parse(usersJson);

const cadastrar = () => {
    let nome = ler.question("- Digite o Nome do Usuario: ");
    let email = ler.questionEMail("- Informe seu Email: ");
    let cpf = ler.questionInt("- Informe seu CPF (somente numeros): ");

    let user_nome = users.some(user => user.nome === nome);
    let user_email = users.some(user => user.email === email);
    let user_cpf = users.some(user => user.cpf === cpf); 

    if (user_nome || user_email || user_cpf) {
        console.log("- ERRO! Um dos Dados informados já existe no JSON!");
    } else {
        users.push({nome: nome, email: email, cpf: cpf});
        fs.writeFileSync(arquivoJSON, JSON.stringify(users, null, 2), 'utf-8');
        console.log("- Dados Gravados no JSON com Sucesso!!!");   
    }
};

const exibir = () => {

    users.forEach(user => console.log(
        `-----------------------------
         - Nome: ${user.nome} 
         - E-mail: ${user.email} 
         - CPF: ${user.cpf}
        ------------------------------`
    ));
};

let opt = ler.questionInt('- 1. CADASTRAR \n- 2. EXIBIR \n- 3. SAIR \n=> ');

if (opt === 1) {
    cadastrar();
} else if (opt === 2) {
    exibir();
} else {
    console.log("- Saindo.....");
    setTimeout(() => {
        console.log("SAIU!");
    }, 3000);
}