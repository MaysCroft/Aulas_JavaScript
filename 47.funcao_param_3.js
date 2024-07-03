// Trabalhando com Funções no JavaScript - UTILIZANDO DOIS OU MAIS PARAMETROS

// Sistema de Conversão de Moedas
const ler = require('readline-sync');

(async () => { const {default: cor} = await import ('chalk');

    const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12, IENE = 0.033;

    function dolar(valor) {
        let result =  valor / DOLAR;
        return new Intl.NumberFormat('en-Us', {  // return valor / DOLAR;
            style: 'currency', currency: 'USD'
        }).format(result);
    }

    function euro(valor) {
        return new Intl.NumberFormat('de-DE', {  // return valor / EURO;
            style: 'currency', currency: 'EUR'
        }).format(valor / EURO);
    }

    function libra(valor) {
        let result =  valor / LIBRA;
        return new Intl.NumberFormat('en-GB', {   // return valor / LIBRA;
            style: 'currency', currency: 'GBP'
        }).format(result);
    }
    
    function iene(valor) {
        return new Intl.NumberFormat('ja-JP', {  // return valor / IENE;
            style: 'currency', currency: 'JPY'
        }).format(valor / IENE);
    }

    function converterMoeda(valor, moeda) {
        switch (moeda) {
            case 1: // DOLAR
                console.log(cor.green(`- O Valor informado convertido para DOLAR é:`));
                console.log(cor.greenBright(`=> ${dolar(valor)}`));
                break;

            case 2: // EURO
                console.log(cor.yellow(`- O Valor informado convertido para EURO é:`));
                console.log(cor.yellowBright(`=> ${euro(valor)}`));
                break;

            case 3: // LIBRA
                console.log(cor.blue(`- O Valor informado convertido para LIBRA é:`));
                console.log(cor.blueBright(`=> ${libra(valor)}`));
                break;

            case 4: // IENE
                console.log(cor.red(`- O Valor informado convertido para IENE é:`));
                console.log(cor.redBright(`=> ${iene(valor)}`));
                break;
        
            default:
                break;
        }
    }

    function menu() {
        let valor = ler.questionFloat(cor.cyan("- Informe um Valor em Reais: R$ "));
        console.log(cor.bgCyanBright("-------------------- MENU DE CÂMBIO --------------------"));
        console.log(cor.magenta("--- Selecione qual moeda deseja realizar a conversão ---"));
        console.log(cor.blue("- 1. DÓLAR ---------------------------------------------"));
        console.log(cor.blue("- 2. EURO ----------------------------------------------"));
        console.log(cor.blue("- 3. LIBRA ---------------------------------------------"));
        console.log(cor.blue("- 4. IENE ----------------------------------------------"));
        let opt = ler.questionInt(cor.cyanBright("=> "));
        converterMoeda(valor, opt);
    }

    menu();
})();