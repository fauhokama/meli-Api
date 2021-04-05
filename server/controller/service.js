const service = require('express').Router()
const redis = require('../cache/redis')
const content = require('../services/content');

service.get('/', (req, res) => {
    const infoToRedis = async () => {
        const token = await redis.getAsync('token');

        // User info
        await content.getUserInfo(token);

        // Pending Orders
        await content.getPendingOrders(token);
    }
    infoToRedis();
});

service.get('/notifications', (req, res) => {
})

module.exports = service;