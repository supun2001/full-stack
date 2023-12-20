const express = require('express');
const router = express.Router();

router.use('/user', require('../controller/user.controller'));
router.use('/phone', require('../controller/phone.controller'));
router.use('/emp', require('../controller/employee.controller'));

module.exports = router;