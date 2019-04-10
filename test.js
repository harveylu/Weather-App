const assert = require('assert');
var cityController = require("./controllers/cityController.js");

it('City name returned matches the city name in the json data', function() {
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

it('Query information has higher priority than cookie', function() {
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

it('Cookie takes place when query is empty', function() {
    var cookie = "Milpitas";
    cityController.cityDataRetrieval(null, cookie, function (error, result){
        if(!error){
            assert.equal(result.city, cookie);
        } else {
            assert.fail(error.message);
        }
    })
});

it('City not on the list will return default city', function() {
    var cookie = "Tokyo";
    cityController.cityDataRetrieval(null, cookie, function (error, result){
        if(!error){
            assert.equal(result.city, cityController.defaultCity);
        } else {
            assert.fail(error.message);
        }
    })
});

it('Json data request with empty params return error message', function() {
    cityController.cityJsonData(null, function (error, result){
        if(!error){
            assert.fail();
        } else {
            assert.equal(error.error, 1);
        }
    });
});

it('Unlisted city json request return error message', function() {
    var params = "Tokyo";
    cityController.cityJsonData(params, function (error, result){
        if(!error){
            assert.fail();
        } else {
            assert.equal(error.error, 1);
        }
    })
});


it('Listed city json request return data for the request city', function() {
    var params = "San Jose";
    cityController.cityJsonData(params, function (error, result){
        if(!error){
            assert.equal(result.location.city, params);
        } else {
            assert.fail(error.message);
        }
    });
});

