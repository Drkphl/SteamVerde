const prompt = require('prompt-sync')();
const { criar, atualizar, listar, remover } = require('./jogos.js');

while (true) {
    console.log(`
1 - para criar jogo
2 - para listar
3 - para atualizar jogo
4 - para remover
5 - para sair
\n
`);

    const opcao = Number(prompt(`Escolha uma opção acima: `));
    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            remover();
            break;
        case 5:
            process.exit();
            break;

        default:
            console.log(`Opção invalida`);
            break;
    }
}
