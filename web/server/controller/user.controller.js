const express = require('express');
const router = express.Router();

const user = require('../models/user.models');

router.get('/', (req, res) => {
    user.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).post('/', (req, res) => {
    const obj = req.body;
    user.create(obj).then(doc => {
        res.status(201).send(doc);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;