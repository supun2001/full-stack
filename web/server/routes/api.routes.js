const express = require('express');
const router = express.Router();

router.use('/user', require('../controller/user.controller'));

module.exports = router;