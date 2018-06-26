var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/officers', function(req, res, next) {
  res.render('officers');
});


router.get('/scholarship', function(req, res, next) {
  res.render('scholarship');
});

module.exports = router;
