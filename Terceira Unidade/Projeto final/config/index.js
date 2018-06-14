/* importar o módulo do framework express */
const express = require('express')

/* iniciar o objeto do express */
const app = express();

/* Variaveis de ambiente. */
const env = require('dotenv');

/* importar o módulo do consign */
const consign = require('consign');

/* importar o módulo do body-parser */
const bodyParser = require('body-parser');

/* importar o módulo do express-validator */
const expressValidator = require('express-validator');

/*Importando modulo morgan*/
const morgan = require('morgan');

/* Importar o módulo do express-session. */
const mongoose = require('mongoose');

/* Configurando o middleware do body-parser. */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Configurando o middleware do express-validator. */
app.use(expressValidator());

/* Extraindo variaveis de ambiente.*/
env.config({ path: 'variables.env' });

/* Auto-load */
consign()
    .include('src/models')
    .then('src/controllers')
    .then('src/routes')
    .into(app);

/* Conecta com o banco de dados e lida com problemas de conexão */
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // → Queremos que o mongoose utilize promises ES6
mongoose.connection.on('error', err => {
    console.log(`🙅 🚫 → ${err.message}`);
});

/* Exportando o objeto app. */
module.exports = app;