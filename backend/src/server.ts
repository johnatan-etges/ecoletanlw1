import express from 'express';

// usando TS, deve-se utilizar, também, a definição de tipos da função..
// quando o VS Code apresenta os "..." na importação, deve-se importar a definição
// de tipos separadamente.
// neste caso: yarn add @types/biblioteca -D

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    response.json([
        'Johnatan',
        'Hamilton',
        'Bonetti',
        'Anderson',
        'Roberto',
        'Rennan'
    ]);
})

app.listen(3333)

// Para executar uma aplicação TS, precisa-se das libs
// typescript (yarn add typescript -D)
// ts-node (yarn add ts-node -D)
// Instalar arquivo de configuração do TS:
// npx tsc --init
// Onde: tsc = abreviação para typescript
// Executar com:
// npx ts-node src/server.ts

