var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var lock = false;

/* GET all users */
router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            return next(err);
        }
        res.json(users);
    });
});

/* GET user by name */
router.get('/:name', function (req, res, next) {

    var name = req.params.name;
    var query = User.where({
        name: name
    });

    query.findOne(function (err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

/* CREATE new user */
router.post('/', function (req, res, next) {
    User.create(req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});

/* PUT request:
    in order to update the user's name
    the request contains the new user's name e.g value
 */
router.put('/:id', function (req, res, next) {

    if (lock == true) {
        return res.status(500)
            .send('Other user is currently updating the name');
    }

    lock = true;
    //the id of the user in order to find him in the db
    var id = req.params.id;
    //the new user name
    var value = req.body.value;

    User.findById(id, function (err, user) {

        //preventing from two users to update the same name
        user.name = value;
        user.save(function (err) {
            if (!err) {
                console.log('new user name has been updated');
                res.send(user)
                lock = false
            } 
//            else {
//                lock = false;
//                res.status(500).send(err)
//            }
        });

    });

});


/* DELETE user by id. */
router.delete('/:id', function (req, res, next) {

    var id = req.params.id;

    //find the user and remove it
    User.findByIdAndRemove(id, function (err, user) {
        var response = {
            message: 'User successfully deleted',
            id: id
        };
        res.send(response);
    })

});


module.exports = router;