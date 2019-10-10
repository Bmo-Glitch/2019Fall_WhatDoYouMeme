const express = require('express');
const users = require("../models/Users");
const app = express.Router();

const game = {
    user: [],
    pictureCards: [],
    quoteCards: [],

    dealer: 0
}

app.post('/join', (req, res)=>{
    const userId = req.query.userid
    game.users.push(users[userId]);
    res.send()
});

module.exports = app;
