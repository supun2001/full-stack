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
    user.findByIdAndUpdate(id, { name: obj.name, password: obj.password, contact: obj.contact, address: obj.address, postlID: obj.postlID })
        .then(doc => {
            res.status(200).send(obj);
        }).catch(err => {
            res.status(500).send(err);
        })
}).delete('/:id', (req, res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => {
        res.status(200).send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
}).post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const existingUser = await user.findOne({ name });

        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        if (existingUser.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;