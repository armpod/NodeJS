'use strict';

var properties = require('../package.json');

var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance: function (req, res) {
        if (err) {
            res.send('Distance Error');
        }
        res.json('Distance');
    }
}

module.exports = controllers;