const express = require('express');
const router = express.Router();

router.use('/user', require('../controller/user.controller'));
router.use('/phone', require('../controller/phone.controller'));

module.exports = router;