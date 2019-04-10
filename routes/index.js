var express = require('express');
var router = express.Router();
var cityController = require("../controllers/cityController.js");

router.get('/', function(req, res, next){
    cityController.cityDataRetrieval(req.query.city, req.cookies.city, function (error, result){
        if(!error){
            if(result.cookie){
                res.cookie('city', result.city);
            }
            res.render('index', { title: result.title , record: result.record, cities: result.citiesList});
        } else {
            res.render('error', { error: error});
        }
    });
});

router.get('/fancy', function(req, res, next){
    cityController.cityDataRetrieval(null, req.cookies.city, function (error, result){
        if(!error){
            res.render('fancy', { title: result.title , record: result.record});
        } else {
            res.render('error', { error: error});
        }
    });
});


module.exports = router;
