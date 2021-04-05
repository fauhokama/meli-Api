const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();


const getAccessToken = async (code) => {
    const result = axios({
        method: 'POST',
        url: 'https://api.mercadolibre.com/oauth/token',
        headers: {
            'content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
        },
        data: querystring.stringify({
            'grant_type': 'authorization_code',
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRET,
            'code': code,
            'redirect_uri': process.env.REDIRECT_URI
        })
    });
    const data = await result;
    return data.data.access_token;
}

module.exports = { getAccessToken };