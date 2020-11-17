const clothesModel = require('../models/clothesModel');

exports.index = (req, res, next) => {
    const products = clothesModel.product();
    res.render('clothes/index', { products, boostrap:"vendor/bootstrap/css/bootstrap.min.css" });
};

exports.about = (req, res, next) => {
    const teams = clothesModel.team();
    res.render('clothes/about', { teams, boostrap:"vendor/bootstrap/css/bootstrap.min.css" });
};

exports.product = (req, res, next) => {
    const products = clothesModel.product();
    res.render('clothes/product', { products, boostrap:"vendor/bootstrap/css/bootstrap.min.css" });
};



exports.contact = (req, res, next) => {
    const products = clothesModel.product();
    res.render('clothes/contact', { products, boostrap:"vendor/bootstrap/css/bootstrap.min.css" });
};

exports.detail = (req, res, next) => {
    res.render('clothes/detail', {boostrap2:"../vendor/bootstrap/css/bootstrap.min.css"});
};