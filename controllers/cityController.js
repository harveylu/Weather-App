var mock = require('../apis/mockData');
const defaultCity = "Mountain View";

module.exports.defaultCity = defaultCity;
module.exports.cityDataRetrieval = function(query, cookie, callback){
    var error;
    var reply;
    if(mock){ //mock to retrieve data from Database;
        reply = {
            "cookie": true,
            "citiesList": mock.cities
        };
        var title = "Weather Application";
        var city = query;
        reply.cookie = true;
        if(query == null || !mock.cities.includes(query)){
            reply.cookie = false;
            city = cookie;
            if(cookie == null || !mock.cities.includes(cookie)){
                city = defaultCity;
            }
        }
        reply.city = city;
        if(city == "Mountain View"){
            reply.title = title +": Mountain View";
            reply.record = mock.mtv;
        }
        else{
            reply.title = title +": " +city;
            reply.record = mock.other;
            reply.record.location.city = city;
        }
    }
    else{ // if the request to retrieve data from database fails
        error = {
            "status": 505,
            "message": "Error occurred while reaching database."
        };
    }
    callback(error, reply);
};

module.exports.cityJsonData = function(params, callback){
    var error;
    var reply;
    if(params == null || !mock.cities.includes(params)){
        error = {
            "error": "1",
            "message": "Data of Request city not found."
        }
    }
    else{
        if(params == "Mountain View"){
            reply = mock.mtv;
        }
        else{
            reply = mock.other;
            reply.location.city = params;
        }
    }
    callback(error, reply);
};