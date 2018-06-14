const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nome: String,
    email: String,
    senha: String
});

mongoose.model('Usuarios', usuarioSchema);