const mongoose = require('mongoose');
const Frases = mongoose.model('Frases');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const keys = require('../../../config/keys');

exports.cadastrarFrase = async (application, req, res) =>{
    req.assert('frase', 'A frase não pode ser vazia.').notEmpty();
    const erros = req.validationErrors();
    if (erros) return res.status(200).json({ erro: true, erros: erros });

    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, keys.Jwt, (err, decoded) => {
        const email = decoded.email;
        let novaFrase = new Frases({ emailCadatrado: email, frase: req.body.frase });
        novaFrase.save((err, data)=>{
            return res.status(200).json({ status: true, msg: "Frase cadastrada", data: req.body.frase });
        });   
    });
};

exports.fraseRandom = async(application, req, res) =>{
    const frases = await Frases.find();

    if(frases.length===0) res.status(200).json({msg:"Não existe nenhuma frase cadastrada."});
    const numeroRandom = Math.floor((Math.random() * (frases.length-1)) + 1);
    res.status(200).json(frases[numeroRandom]);
}