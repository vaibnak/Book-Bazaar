var express = require('express');
var router = express.Router();

var getBookController = require("../controllers/getBookController");

router.get("/",getBookController.getBook);

module.exports = router;