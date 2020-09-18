var express = require('express');
var router = express.Router();

var uploadBookController = require("../controllers/uploadBookController");

router.post("/",uploadBookController.uploadBook);

module.exports = router;