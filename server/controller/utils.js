const fetch = require("node-fetch")


const getToken = async function (code) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("client_id", process.env.CLIENT_ID);
    urlencoded.append("client_secret", process.env.CLIENT_SECRET);
    urlencoded.append("code", code);
    urlencoded.append("redirect_uri", process.env.REDIRECT_URI);
    const result = await fetch('https://api.mercadolibre.com/oauth/token', {
        method: 'POST',
        headers: {
            "content-Type": "application/x-www-form-urlencoded",
            "accept": 'application/json'
        },
        body: urlencoded
    });
    const data = await result.json();
    return await data.access_token;
}

const getUserInfo = async function (token) {
    const result = await fetch('https://api.mercadolibre.com/users/me', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    })
    // console.log(data);
}

const getPendingOrders = async function (token) {
    const result = await fetch('https://api.mercadolibre.com/orders/search/pending?seller=184424635', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    })
    const data = await result.json();
    // console.log(data);
}



module.exports = { getToken, getPendingOrders, getUserInfo }