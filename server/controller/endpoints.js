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

endpoints.get('/products', (req, res) => {
    // redis.getSetAsync('set')
    //     .then(setItems => setItems.forEach(async (element) => {
    //         await redis.getHashMapAsync(element);
    //     }))
    //     .then(result => console.log(result))

    const getItemInfo = async () => {
        const setOfItems = await redis.getSetAsync('set');
        let finalList = [];
        await Promise.all(setOfItems.map(
            async element => {
                const item = await redis.getHashMapAsync(element);
                finalList.push(item);
            }
        ));
        res.send(finalList);
    }
    getItemInfo();
});

// router.get('/', (req, res) => {
// });

module.exports = endpoints;