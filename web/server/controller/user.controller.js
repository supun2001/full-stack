const express = require('express');
const router = express.Router();

const user = require('../models/user.models');

router.get('/', (req, res) => {
    user.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).get('/:id', (req, res) => {
    let id = req.params.id;
    user.findById(id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).post('/', (req, res) => {
    const obj = req.body;
    user.create(obj).then(doc => {
        res.status(201).send(obj);
    }).catch(err => {
        res.status(500).send(err);
    })
}).put('/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id, { name: obj.name, contact: obj.contact, address: obj.address, postlID: obj.postlID })
        .then(doc => {
            res.status(200).send(obj);
        }).catch(err => {
            res.status(500).send(err);
        })
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;