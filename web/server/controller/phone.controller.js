const express = require('express');
const router = express.Router();

const phone = require('../models/phone.modelss');

router.get('/', (req, res) => {
    phone.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).get('/:id', (req, res) => {
    let id = req.params.id;
    phone.findById(id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).post('/', (req, res) => {
    const obj = req.body;
    phone.create(obj).then(doc => {
        res.status(201).send(obj);
    }).catch(err => {
        res.status(500).send(err);
    })
}).put('/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    phone.findByIdAndUpdate(id, { p_name: obj.p_name, p_price: obj.p_price, p_imgLink: obj.p_imgLink, p_qunittiy: obj.p_qunittiy, p_desc: obj.p_desc })
        .then(doc => {
            res.status(200).send(obj);
        }).catch(err => {
            res.status(500).send(err);
        })
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    phone.findByIdAndDelete(id).then(docs => {
        res.status(200).send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;