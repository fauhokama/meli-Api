const auth = require('express').Router();
const querystring = require('querystring');

auth.get('/mercadolibre', (req, res) => {
    res.redirect(meliAuth);
});

auth.get('/mercadolibre/callback', (req, res) => {
    const code = req.query.code;

    res.redirect('http://localhost:3000');
});



const meliAuth = 'https://auth.mercadolibre.com.ar/authorization?' +
    querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: 'write read',
        redirect_uri: process.env.REDIRECT_URI,
    })

module.exports = auth;