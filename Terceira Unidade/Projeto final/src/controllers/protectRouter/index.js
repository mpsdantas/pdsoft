const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const keys = require('../../../config/keys');
exports.verify = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if (!token) return res.status(401).send({ auth: false, message: 'Nenhum token recebido.' })
    jwt.verify(token, keys.Jwt, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Falha na autenticação do token.' })
        return next();
    });
}