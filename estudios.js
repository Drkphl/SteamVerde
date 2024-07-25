const prompt = require('prompt-sync')();

const estudios = [];

const validarIndice = (indice) => indice >= 0 && indice < estudios.length;

const modelo = () => {
    const nome = prompt('nome do estudio: ');
    const fundacao = prompt('em que ano foi lançado?: ');
    const paisOrigem = prompt('qual a duração média?: ');

    if (nome != '' && fundacao >= 1962 && fundacao <= 2024 && paisOrigem != '') {
        return {
            nome,
            fundacao,
            paisOrigem,
        };
    } else {
        console.log('Dados invalidos');
    }
};

const criar = () => {
    const estudio = modelo();
    if (estudio != undefined) {
        estudios.push(estudio);
        console.log('estudio cadastrado com sucesso');
    }
};

const listar = () => {
    if (estudios.length == 0) {
        console.log('nenhum estudio cadastado');
        return false;
    } else {
        estudios.forEach((estudio, indice) => {
            console.log(`
            ${indice + 1}. 
            Nome: ${estudio.nome}
            Ano de fundação: ${estudio.fundacao}
            País: ${estudio.paisOrigem}

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
    const estudio = modelo();
    if (estudio != undefined && validarIndice(indice)) {
        estudios[indice] = estudio;
        console.log('estudio atualizado com sucesso');
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
        estudios.splice(indice, 1);
        console.log('estudio removido com sucesso');
    } else {
        console.log('falha na remoção');
    }
};
