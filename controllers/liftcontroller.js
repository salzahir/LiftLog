const {body, validationResult} = require('express-validator');

const {Router} = require('express');


exports.getHome = (req, res) => {
    res.render('index');
}


