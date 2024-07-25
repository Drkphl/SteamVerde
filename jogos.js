const prompt = require('prompt-sync')();

const jogos = [];

const validarIndice = (indice) => indice >= 0 && indice < jogos.length;

const modelo = () => {
    const nome = prompt('nome do jogo: ');
    const anoLancamento = prompt('em que ano foi lançado?: ');
    const duracao = prompt('qual a duração média?: ');
    const preco = prompt('qual o preço do jogo?: ');
    const estudio = prompt('qual a desenvolvedora?: ');
    let sequencia = -1;
    if (listar()) {
        sequencia = prompt('qual a sequencia do jogo? Digite 0 para não há sequencia');
    }
    if (
        nome != '' &&
        anoLancamento >= 1962 &&
        anoLancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != '' &&
        sequencia >= -1 &&
        (sequencia < jogos.length || jogos.length == 0)
    ) {
        return {
            nome,
            anoLancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        };
    } else {
        console.log('Dados invalidos');
    }
};

const criar = () => {
    const jogo = modelo();
    if (jogo != undefined) {
        jogos.push(jogo);
        console.log('jogo cadastrado com sucesso');
    }
};

const listar = () => {
    if (jogos.length == 0) {
        console.log('nenhum jogo cadastado');
        return false;
    } else {
        jogos.forEach((jogo, indice) => {
            console.log(`
            ${indice + 1}. 
            Nome: ${jogo.nome}
            Ano de Lançamento: ${jogo.anoLancamento}
            Duração: ${jogo.duracao}
            Preço: ${jogo.preco}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual o indice que deseja atualizar?: `) - 1;
    const jogo = modelo();
    if (jogo != undefined && validarIndice(indice)) {
        jogos[indice] = jogo;
        console.log('jogo atualizado com sucesso');
    } else {
        console.log('falha na atualização');
    }
};

const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual o indice que deseja remover?: `) - 1;

    if (validarIndice(indice)) {
        jogos.splice(indice, 1);
        console.log('jogo removido com sucesso');
    } else {
        console.log('falha na remoção');
    }
};

module.exports = {
    criar,
    atualizar,
    listar,
    remover,
};
