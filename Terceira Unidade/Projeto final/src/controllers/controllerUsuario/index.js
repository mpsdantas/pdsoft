const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuarios');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const keys = require('../../../config/keys');
exports.novoUsuario = async (application, req, res) => {
    req.assert('nome', 'O nome não pode ser vazio.').notEmpty();
    req.assert('senha', 'A senha não pode ser vazia').notEmpty();
    req.assert('email', 'Digite um formato de email valido: nome@email.com').isEmail();
    req.assert('email', 'A senha não pode ser vazia').notEmpty();
    const erros = req.validationErrors();
    if(erros) return res.status(200).json({erro:true, erros: erros});

    let buscaUsuarios = await Usuario.findOne({email:req.body.email});
    if (buscaUsuarios) return res.status(200).json({ erro: true, erros: "Já existe um usuário cadastrado com esse email." });

    req.body.senha = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    let novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    let salvarUsuario = await novoUsuario.save();

    let infoUsuario = req.body;
    let token = await jwt.sign(infoUsuario, keys.Jwt, { expiresIn: '24h' });
    if (!salvarUsuario) return res.status(200).json({ status: false, msg: "Usuário não foi cadastrado." });
    return res.status(200).json({ status: true, msg: "Usuário foi cadastrado.", token: token });
};

exports.loginUsuario = async (application, req, res) =>{
    req.assert('senha', 'A senha não pode ser vazia').notEmpty();
    req.assert('email', 'Digite um formato de email valido: nome@email.com').isEmail();
    req.assert('email', 'A senha não pode ser vazia').notEmpty();
    const erros = req.validationErrors();
    if (erros) return res.status(200).json({ erro: true, erros: erros });

    req.body.senha = await crypto.createHash("md5").update(req.body.senha).digest("hex");
    let buscaUsuarios = await Usuario.findOne({ email: req.body.email, senha: req.body.senha });
    if (!buscaUsuarios) return res.status(200).json({ erro: true, erros: "Usuário ou senha inválidos." });
    let infoUsuario = {
        nome: buscaUsuarios.nome,
        email: buscaUsuarios.email
    };
    let token = await jwt.sign(infoUsuario, keys.Jwt, { expiresIn: '24h' });
    return res.status(200).json({ status: true, msg: "Login autorizado.", token: token });
};

exports.atualizarSenha = async (application, req, res) =>{
    req.assert('senha', 'A senha não pode ser vazia').notEmpty();
    const erros = req.validationErrors();
    if (erros) return res.status(200).json({ erro: true, erros: erros });

    req.body.senha = await crypto.createHash("md5").update(req.body.senha).digest("hex");

    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, keys.Jwt, (err, decoded) => {
        const email = decoded.email;
        Usuario.update({email:email},{$set:{senha: req.body.senha}},(data)=>{
            return res.status(200).json({ status: true, msg: "Senha Atualizada"});
        });
    });
};

exports.deletarUsuario = async (application, req, res) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, keys.Jwt, (err, decoded) => {
        const email = decoded.email;
        Usuario.deleteOne({ email: email },(data) => {
            return res.status(200).json({ status: true, msg: "Usuario deletado" });
        });
    });
};

