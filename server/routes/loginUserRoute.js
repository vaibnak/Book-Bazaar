var express = require('express');
var router = express.Router();

var loginUserController = require("../controllers/loginUserController");

router.post("/",loginUserController.loginUser);

module.exports = router;