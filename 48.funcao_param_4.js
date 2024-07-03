// Trabalhando com Funções no JavaScript - UTILIZANDO DOIS OU MAIS PARAMETROS

// Objetos e Arrays
const ler = require('readline-sync');

(async () => { const {default: cor} = await import ('chalk');

    function criarEvento(nome, local, data, hora, participantes, custoPorPart) {
        let custoTotal = calcularCustoTotal(participantes, custoPorPart);
        return {
            Nome: nome,
            Local: local,
            Data: data,
            Hora: hora,
            Participantes: participantes,
            'Custo por Participante ': custoPorPart,
            'Custo Total' : custoTotal
        };
    }
    
    function calcularCustoTotal(part, custoPP) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(part * custoPP);
    }
    
    function cadastrar() {
        let nome = ler.question(cor.blue("- Informe o Nome do Evento: "));
        let local = ler.question(cor.blue("- Informe o Local do Evento: "));
        let data = ler.question(cor.blue("- Informe a Data do Evento: "));
        let hora = ler.question(cor.blue("- Informe o Horario do Evento: "));
        let part = ler.questionInt(cor.blue("- Informe a Quantidade de Participantes: "));
        let custoPP = ler.questionFloat(cor.blue("- Informe o Valor que cada um ira pagar: R$ "));
    
        let EVT = criarEvento(nome, local, data, hora, part, custoPP);
        console.clear();
        exibirEvento(EVT);
    }
    
    let exibirEvento = function (evento) {
        console.log(cor.cyanBright("---------- Informações do Evento ----------"));
        for (let [chave, valor] of Object.entries(evento)) {
            console.log(cor.blueBright(`=> ${chave} : ${valor}`));
        }
        console.log(cor.cyanBright("-------------------------------------------"));
    }
    
    cadastrar();
})();