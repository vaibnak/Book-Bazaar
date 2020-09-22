var express = require('express');
var router = express.Router();

var orderBookController = require("../controllers/orderBookController");

router.post("/",orderBookController.orderBook);

module.exports = router;