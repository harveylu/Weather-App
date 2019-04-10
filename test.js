const assert = require('assert');
var cityController = require("./controllers/cityController.js");

it('city name returned matches the city name in the json data', function() {
    cityController.cityDataRetrieval(null, null, function (error, result){
        if(!error){
            assert.equal(result.city, result.record.location.city);
        } else {
            assert.fail(error.message);
        }
    });
    cityController.cityDataRetrieval("Sunnyvale", "Cupertino", function (error, result){
        if(!error){
            assert.equal(result.city, result.record.location.city);
        } else {
            assert.fail(error.message);
        }
    })
});

it('"Null" query and cookie to get default city', function() {
    cityController.cityDataRetrieval(null, null, function (error, result){
        if(!error){
            assert.equal(result.city, cityController.defaultCity);
        } else {
            assert.fail(error.message);
        }
    })
});

it('query information has higher priority than cookie', function() {
    var query = "San Jose";
    var cookie = "Sunnyvale";
    cityController.cityDataRetrieval(query, cookie, function (error, result){
        if(!error){
            assert.equal(result.city, query);
        } else {
            assert.fail(error.message);
        }
    })
});

it('cookie takes place when query is empty', function() {
    var cookie = "Milpitas";
    cityController.cityDataRetrieval(null, cookie, function (error, result){
        if(!error){
            assert.equal(result.city, cookie);
        } else {
            assert.fail(error.message);
        }
    })
});

it('city not in the list will return default city', function() {
    var cookie = "Tokyo";
    cityController.cityDataRetrieval(null, cookie, function (error, result){
        if(!error){
            assert.equal(result.city, cityController.defaultCity);
        } else {
            assert.fail(error.message);
        }
    })
});

