const axios = require('axios');
const redis = require('../cache/redis');


const getUserInfo = async function (token) {
    const result = await axios.get('https://api.mercadolibre.com/users/me', {
        headers: { 'Authorization': 'Bearer ' + token }
    })
    const data = await result.data.first_name;
    redis.setAsync('userinfo', data);
}

const getPendingOrders = async function (token) {
    const id = 33488780;
    const fullItems = await axios.get(`https://api.mercadolibre.com/users/${id}/items/search?logistic_type=fulfillment`, {
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const listOfItems = fullItems.data.results;

    listOfItems.forEach(async itemId => {
        const result = await axios.get(`https://api.mercadolibre.com/items/${itemId}`, {
            headers: { 'Authorization': 'Bearer ' + token }
        });

        // Creating list of items
        const key = 'set';
        redis.client.sadd(key, itemId);

        // Hashmap
        const itemName = result.data.title;
        const availableQuantity = result.data.available_quantity;
        const thumbnail = result.data.thumbnail;
        redis.client.hmset(itemId,
            'itemName', itemName,
            'availableQuantity', availableQuantity,
            'thumbnail', thumbnail);
    });
};

module.exports = { getPendingOrders, getUserInfo };