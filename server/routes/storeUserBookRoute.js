var express = require('express');
var router = express.Router();

var storeUserBookController = require("../controllers/storeUserBookController");

router.post("/",storeUserBookController.storeUserBook);

module.exports = router;