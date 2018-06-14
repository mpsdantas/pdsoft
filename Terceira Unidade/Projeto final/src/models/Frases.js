const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const frasesSchema = new Schema({
    emailCadastro: String,
    frase: String
});

mongoose.model('Frases', frasesSchema);