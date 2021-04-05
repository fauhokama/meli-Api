const auth = require('express').Router();
const axios = require('axios');
const querystring = require('querystring');
const redis = require('../cache/redis')
const authService = require('./../services/auth');

auth.get('/mercadolibre', (req, res) => {
    res.redirect(meliAuth);
});

auth.get('/mercadolibre/callback', (req, res) => {

    const tokenToRedis = async () => {
        const code = req.query.code;
        const token = await authService.getAccessToken(code);
        await redis.setAsync('token', token, 'ex', 90);
        await axios.get('http://localhost:3001/service');
    }
    tokenToRedis();
    res.redirect('http://localhost:3000');
});

const meliAuth = 'https://auth.mercadolibre.com.ar/authorization?' +
    querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: 'write read',
        redirect_uri: process.env.REDIRECT_URI,
    });

module.exports = auth;
