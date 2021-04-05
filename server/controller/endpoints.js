// Endpoints for React
const endpoints = require('express').Router();
const redis = require('../cache/redis')

endpoints.get('/userinfo', (req, res) => {
    const getUserInfo = async () => {
        const user = await redis.getAsync('userinfo');
        res.send(user);
    }
    getUserInfo();

});

// router.get('/products', (req, res) => {
// });

// router.get('/', (req, res) => {
// });

module.exports = endpoints;