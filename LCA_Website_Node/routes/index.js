var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/officers', function(req, res, next) {
  let exec = fs.readFileSync("./views/exec.csv");
  exec = exec.toString().split('\n').map((line) => {
    return line.split(',');
  });
  console.log(exec);

  let officers = fs.readFileSync("./views/officers.csv");
  officers = officers.toString().split('\n').map((line) => {
      return line.split(',');
  });
  console.log(officers);
  res.render('officers', {
    exec: exec,
    officers: officers
  });
});

router.get('/scholarship', function(req, res, next) {
  res.render('scholarship');
});

router.get('/service', function(req, res, next) {
    res.render('service');
});

module.exports = router;
