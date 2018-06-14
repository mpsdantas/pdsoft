# API de Frases aleatórias

[![NPM](https://img.shields.io/badge/npm-v5.6.0-blue.svg?style=for-the-badge)](https://www.npmjs.com/) 
[![NODE](https://img.shields.io/badge/node-v9.0.0-blue.svg?style=for-the-badge)](https://nodejs.org/en//)

## Instalação

Tendo em vista que você possui o Node na sua versão 9.0 ou superior assim como o mongoDB entre na pasta projeto final e execute o comando.

`$ npm install --i`

Feito isso você pode executar o comando:

`$ node app`

Assim o serviço estará rodando.

## Rotas da api
GET URL: `/api` | PARAMETROS: | RETORNO: {status: true, msg: "Bem vindo a API de cadastro de usuários e frases do dia."}

POST  URL: `/api/cadastrar-usuario` | PARAMETROS: {nome: String, email: String, senha: String}| RETORNO: { status: true, msg: "Usuário foi cadastrado.", token: token }

POST  URL: `/api/cadastrar-frase` | HEADERS: x-access-token: o seu token | PARAMETROS: { frase: String }| RETORNO: { status: true, msg: "Frase cadastrada", data: Strig }

GET URL: `/api/frase` | HEADERS: x-access-token: o seu token| RETORNO: {emailCadastrado: String, frase: String}
