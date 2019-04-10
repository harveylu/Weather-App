var exports = module.exports= {};

var mockData = {
    "location":{
        "woeid": 2502265,
        "city":"Mountain View",
        "region":" CA",
        "country":"United States",
        "lat":37.371609,
        "long":-122.038254,
        "timezone_id":"America/Los_Angeles"
    },
    "current_observation":{
        "wind":{
            "chill":59,
            "direction":165,
            "speed":8.7
        },
        "atmosphere":{
            "humidity":76,
            "visibility":10,
            "pressure":29.68
        },
        "astronomy":{
            "sunrise":"7:23 am",
            "sunset":"5:07 pm"
        },
        "condition":{
            "text":"Scattered Showers",
            "code":39,
            "temperature":60
        },
        "pubDate":1546892000
    },
    "forecasts":[
        {
            "day":"Tue",
            "date":1546934400,
            "low":52,
            "high":61,
            "text":"Rain",
            "code":12
        },
        {
            "day":"Wed",
            "date":1547020800,
            "low":51,
            "high":62,
            "text":"Scattered Showers",
            "code":39
        },
        {
            "day":"Thu",
            "date":1547107200,
            "low":46,
            "high":60,
            "text":"Mostly Cloudy",
            "code":28
        },
        {
            "day":"Fri",
            "date":1547193600,
            "low":48,
            "high":61,
            "text":"Showers",
            "code":11
        },
        {
            "day":"Sat",
            "date":1547280000,
            "low":47,
            "high":62,
            "text":"Rain",
            "code":12
        },
        {
            "day":"Sun",
            "date":1547366400,
            "low":48,
            "high":58,
            "text":"Rain",
            "code":12
        },
        {
            "day":"Mon",
            "date":1547452800,
            "low":47,
            "high":58,
            "text":"Rain",
            "code":12
        },
        {
            "day":"Tue",
            "date":1547539200,
            "low":46,
            "high":59,
            "text":"Scattered Showers",
            "code":39
        },
        {
            "day":"Wed",
            "date":1547625600,
            "low":49,
            "high":56,
            "text":"Rain",
            "code":12
        },
        {
            "day":"Thu",
            "date":1547712000,
            "low":49,
            "high":59,
            "text":"Scattered Showers",
            "code":39
        }
    ]
};
exports.mtv = mockData;

var other = {
    "location":{
        "woeid": 2502285,
        "city":"Mountain View",
        "region":" CA",
        "country":"United States",
        "lat":37.371609,
        "long":-122.038254,
        "timezone_id":"America/Los_Angeles"
    },
    "current_observation":{
        "wind":{
            "chill":90,
            "direction":145,
            "speed":3.4
        },
        "atmosphere":{
            "humidity":39,
            "visibility":15,
            "pressure":38.56
        },
        "astronomy":{
            "sunrise":"7:45 am",
            "sunset":"6:08 pm"
        },
        "condition":{
            "text":"Sunny",
            "code":36,
            "temperature": 74
        },
        "pubDate":1546992000
    },
    "forecasts":[
        {
            "day":"Tue",
            "date":1546934400,
            "low":48,
            "high":61,
            "text":"Mostly Cloudy",
            "code":13
        },
        {
            "day":"Wed",
            "date":1547020800,
            "low":49,
            "high":62,
            "text":"Rain",
            "code":41
        },
        {
            "day":"Thu",
            "date":1547107200,
            "low":46,
            "high":60,
            "text":"Showers",
            "code":27
        },
        {
            "day":"Fri",
            "date":1547193600,
            "low":45,
            "high":61,
            "text":"Scattered Showers",
            "code":9
        },
        {
            "day":"Sat",
            "date":1547280000,
            "low":44,
            "high":62,
            "text":"Rain",
            "code":13
        },
        {
            "day":"Sun",
            "date":1547366400,
            "low":48,
            "high":58,
            "text":"Rain",
            "code":14
        },
        {
            "day":"Mon",
            "date":1547452800,
            "low":45,
            "high":58,
            "text":"Rain",
            "code":11
        },
        {
            "day":"Tue",
            "date":1547539200,
            "low":46,
            "high":59,
            "text":"Scattered Showers",
            "code":33
        },
        {
            "day":"Wed",
            "date":1547625600,
            "low":50,
            "high":56,
            "text":"Rain",
            "code":18
        },
        {
            "day":"Thu",
            "date":1547712000,
            "low":49,
            "high":59,
            "text":"Sunny",
            "code":15
        }
    ]
};
exports.other = other;


var code={
    "0" :"Tornado",
    "1"	:"Tropical storm",
    "2" :"Hurricane",
    "3" :"Severe Thunderstorms",
    "4" :"Thunderstorms",
    "5" :"Mixed rain and snow",
    "6" :"Mixed rain and sleet",
    "7" :"Mixed snow and sleet",
    "8" :"Freezing Drizzle",
    "9" :"Drizzle",
    "10":"Freezing rain",
    "11":"Showers",
    "12":"Showers",
    "13":"Snow flurries",
    "14":"Light snow showers",
    "15":"Blowing snow",
    "16":"Snow",
    "17":"Hail",
    "18":"Sleet",
    "19":"Dust",
    "20":"Foggy",
    "21":"Haze",
    "22":"Smoky",
    "23":"Blustery",
    "24":"Windy",
    "25":"Cold",
    "26":"Cloudy",
    "27":"Mostly cloudy (night)",
    "28":"Mostly cloudy (day)",
    "29":"Partly cloudy (night)",
    "30":"Partly cloudy (day)",
    "31":"Clear (night)",
    "32":"Sunny",
    "33":"Fair (night)",
    "34":"Fair (day)",
    "35":"Mixed rain and hail",
    "36":"Hot",
    "37":"Isolated thunderstorms",
    "38":"Scattered thunderstorms",
    "39":"Scattered thunderstorms",
    "40":"Scattered showers",
    "41":"Heavy snow",
    "42":"Scattered snow showers",
    "43":"Heavy snow",
    "44":"Partly cloudy",
    "45":"Thundershowers",
    "46":"Snow showers",
    "47":"Isolated thundershowers",
    "3200":"Not available"
};
exports.code = code;

var cityList = [
    "San Jose",
    "Mountain View",
    "Sunnyvale",
    "Cupertino",
    "Milpitas",
    "Palo Alto"
];
exports.cities = cityList;

