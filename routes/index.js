var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('req.body')
  console.log(req.body)
  console.log('req.query')
  console.log(req.query)
  console.log('req.params')
  console.log(req.params)
  console.log('req.headers')
  console.log(req.headers)
  res.send('OK')
});

module.exports = router;
