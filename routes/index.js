var express = require('express');
var router = express.Router();
var cityController = require("../controllers/cityController.js");
const cookieLife = 30 * 24 * 60 * 60 * 1000; // one month

router.get('/', function(req, res, next){
    cityController.cityDataRetrieval(req.query.city, req.cookies.city, function (error, result){
        if(!error){
            if(result.cookie){
                res.cookie('city', result.city, { maxAge: cookieLife, httpOnly: true });
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

router.get('/:city/json', function(req, res, next){
    cityController.cityJsonData(req.params.city, function(error, result){
        if(!error){
            res.json(result);
        } else {
            res.json(error);
        }
    })
});


module.exports = router;
