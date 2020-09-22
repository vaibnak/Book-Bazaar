var express = require('express');
var router = express.Router();

var getOrderController = require("../controllers/getOrderController");

router.post("/",getOrderController.getOrder);

module.exports = router;