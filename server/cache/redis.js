const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient();



const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const getSetAsync = promisify(client.smembers).bind(client);
const getHashMapAsync = promisify(client.hgetall).bind(client);

module.exports = { client, getAsync, setAsync, getSetAsync, getHashMapAsync };