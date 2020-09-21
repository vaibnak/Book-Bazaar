var express = require('express');
var router = express.Router();

var removeUserBookController = require("../controllers/removeUserBookController");

router.post("/",removeUserBookController.removeUserBook);

module.exports = router;