const auth = require('./auth');
const service = require('./service')
const router = require('express').Router();

router.use('/auth', auth);
router.use('/service', service);

module.exports = router;