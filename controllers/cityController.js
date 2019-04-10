var mock = require('../apis/mockData');
const defaultCity = "Mountain View";

module.exports.defaultCity = defaultCity;
module.exports.cityDataRetrieval = function(query, cookie, callback){
    var error;
    var reply;
    if(mock){ //mock to retrieve data from Database;
        error = null;
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
            mock.other.location.city = city;
            reply.record = mock.other;
        }
    }
    else{ // if the request to retrieve data from database fails
        error = {
            "status": 505,
            "message": "Error occurred while reaching database."
        };
        reply = null;
    }
    callback(error, reply);
};