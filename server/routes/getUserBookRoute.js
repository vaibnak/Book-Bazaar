var express = require('express');
var router = express.Router();

var getUserBookController = require("../controllers/getUserBookController");

router.post("/",getUserBookController.getUserBook);

module.exports = router;