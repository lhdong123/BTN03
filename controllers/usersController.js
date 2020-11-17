const usersModel = require('../models/usersModel');

exports.signup = (req, res, next) => {

    res.render('users/signup');
};

exports.login = (req, res, next) => {

    res.render('users/login');
};