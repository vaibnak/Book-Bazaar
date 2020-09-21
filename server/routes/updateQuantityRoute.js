var express = require('express');
var router = express.Router();

var updateQuantityController = require("../controllers/updateQuantityController");

router.post("/",updateQuantityController.updateQuantity);

module.exports = router;