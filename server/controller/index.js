const auth = require('./auth');
const service = require('./service');
const endpoints = require('./endpoints');
const router = require('express').Router();

router.use('/auth', auth);
router.use('/service', service);
router.use('/api', endpoints);

module.exports = router;