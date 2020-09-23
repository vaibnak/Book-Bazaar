var express = require('express');
var router = express.Router();

var getUserController = require("../controllers/getUserController");

router.post("/",getUserController.getUser);

module.exports = router;