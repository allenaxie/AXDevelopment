var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  user = {
    name: 'Allen Xie',
    email: 'allenaxie1@gmail.com',
    phone: '1(650)781-9863',
  }
  res.render('index',{user});
});

module.exports = router;
