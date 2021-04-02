const auth = require('express').Router();
const querystring = require('querystring');
const axios = require('axios');
const fetch = require("node-fetch");

const meliAuth = 'https://auth.mercadolibre.com.ar/authorization?' +
    querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: 'write read',
        redirect_uri: process.env.REDIRECT_URI,
    });

auth.get('/mercadolibre', (req, res) => {
    res.redirect(meliAuth);
});

auth.get('/mercadolibre/callback', (req, res) => {
    const code = req.query.code
    axios.post('http://localhost:3001/service', {
        code: code
    });

    res.redirect('http://localhost:3000');
});

module.exports = auth;
