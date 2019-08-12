var express = require('express');
var router = express.Router();
let jsonData = require('./../public/api/v1/dataset.json');
/* GET users listing. */
router.get('/', function(req, res, next) {

    res.json(jsonData);
});

module.exports = router;
