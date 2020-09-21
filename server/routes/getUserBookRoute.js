var express = require('express');
var router = express.Router();

var getUserBookController = require("../controllers/getUserBookController");

router.get("/",getUserBookController.getUserBook);

module.exports = router;