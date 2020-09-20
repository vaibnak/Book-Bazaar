var express = require('express');
var router = express.Router();

var filterByYearController = require("../controllers/filterByYearController");

router.get("/",filterByYearController.filterByYear);

module.exports = router;