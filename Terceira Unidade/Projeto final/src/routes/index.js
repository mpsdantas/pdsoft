const protectRouter = require('../controllers/protectRouter');
const controllerFrases = require('../controllers/controllerFrases');
const controllerUsuario = require('../controllers/controllerUsuario');
module.exports = application =>{
    application.get('/api', (req, res) =>{
        res.status(200).json({status: true, msg: "Bem vindo a API de cadastro de usuários e frases do dia."});
    });
    application.get('/api/frase', protectRouter.verify, (req, res) => {
        controllerFrases.fraseRandom(application, req, res);
    });
    application.post('/api/cadastrar-frase', protectRouter.verify, (req, res) =>{
        controllerFrases.cadastrarFrase(application, req, res);
    });
    application.post('/api/cadastrar-usuario', (req, res) => {
        controllerUsuario.novoUsuario(application, req, res);
    });
    application.post('/api/atualizar-senha', (req, res) => {
        controllerUsuario.atualizarSenha(application, req, res);
    });
    application.delete('/api/deletar-usuario', (req, res) => {
        controllerUsuario.deletarUsuario(application, req, res);
    });
    application.put('/api/login', (req, res) => {
        controllerUsuario.loginUsuario(application, req, res);
    });
};