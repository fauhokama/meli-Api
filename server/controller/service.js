const service = require('express').Router()
const utils = require('./utils');

let code;

service.post('/', (req, res) => {
    code = req.body.code;
    utils.getToken(code)
        .then(console.log(token));
});

service.get('/token', (req, res) => {
    console.log(code);
})

module.exports = service;