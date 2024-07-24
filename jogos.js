const prompt = require('prompt-sync')();

const jogos = [];

const criar = () => {
    let nome = prompt('nome do jogo: ');
    let anoLancamento = prompt('em que ano foi lançado?: ');
    let duracao = prompt('qual a duração média?: ');
    let preco = prompt('qual o preço do jogo?: ');
    let estudio = prompt('qual a desenvolvedora?: ');
    let sequencia = prompt('qual a sequencia do jogo?: ');

    if (
        nome != '' &&
        anoLancamento >= 1962 &&
        anoLancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != '' &&
        sequencia > 0 &&
        (sequencia < jogos.length || jogos.length == 0)
    ) {
        jogos.push({
            nome,
            anoLancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        });
        console.log('jogo cadastrado com sucesso');
    } else {
        console.log('Dados invalidos');
    }
};

const listar = () => {
    if (jogos.length == 0) {
        console.log('nenhum jogo cadastado');
    } else {
        jogos.forEach((jogo, index) => {
            console.log(`
            ${index + 1}. 
            Nome: ${jogo.nome}
            Ano de Lançamento: ${jogo.anoLancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `);
        });
    }
};
