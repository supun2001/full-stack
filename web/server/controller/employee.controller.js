const express = require('express');
const router = express.Router();

const employee = require('../models/employee.modelss');

router.get('/', (req, res) => {
    employee.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).get('/:id', (req, res) => {
    let id = req.params.id;
    employee.findById(id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).post('/', (req, res) => {
    const obj = req.body;
    employee.create(obj).then(doc => {
        res.status(201).send(obj);
    }).catch(err => {
        res.status(500).send(err);
    })
}).put('/:id', (req, res) => {
    let id = req.params.id;
    const obj = req.body;
    employee.findByIdAndUpdate(id, { e_name: obj.e_name, e_num: obj.e_num, e_add: obj.e_add })
        .then(doc => {
            res.status(200).send(obj);
        }).catch(err => {
            res.status(500).send(err);
        })
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    employee.findByIdAndDelete(id).then(docs => {
        res.status(200).send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
})

module.exports = router;