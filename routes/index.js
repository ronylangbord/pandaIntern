var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = process.env.MONGODB_URI || 'localhost:27017/internTest';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {
        title: 'Welcome!'
    });
});


module.exports = router;