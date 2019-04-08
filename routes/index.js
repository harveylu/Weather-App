var express = require('express');
var router = express.Router();
var mock = require('../apis/mockData');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  var city = req.cookies.city;
  if(city != null && city == 'Mountain View'){
      res.render('index', { title: city , record: mock.mtv, cities:mock.cities});
  }
  else if(city == null){
      res.render('index', { title: 'Weather Application' , record: null, cities:mock.cities});
  }
  else{
      mock.other.location.city = city;
      res.render('index', { title: city , record: mock.other, cities:mock.cities});
  }
});

router.get('/landing', function(req, res, next) {
    console.log(req.cookies);
    var city = req.cookies.city;
    if(city != null && city == 'Mountain View'){
        res.render('landing', { title: city , record: mock.mtv});
    }
    else if(city == null){
        res.render('landing', { title: 'Weather Application' , record: null});
    }
    else{
        mock.other.location.city = city;
        res.render('landing', { title: city , record: mock.other});
    }
});


module.exports = router;
