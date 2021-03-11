const express = require('express');
const router = express();

const UserModel = require('../models/UserDataModel');

router.post('/api/login', (req, res) => {
    console.log('api/login: ', req.body);

    UserModel.findOne({ username: req.body.username }, (err, userDoc) => {
        if (err) {
            console.log('ERROR LOGIN: ', err);
            res.send('Error while logging in' + err);
        } else if (userDoc) {
            res.json(userDoc);
        }
    });
});

module.exports = router;