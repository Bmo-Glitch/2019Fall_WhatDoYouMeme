const express = require('express');
const users = require('../models/Users');

const app = express.Router();

app.get('/', (req, res) => res.send(users))
app.post('/', (req, res) => {
    users.push(req.query);
    res.send(users[users.length - 1]);
})



module.exports = app;