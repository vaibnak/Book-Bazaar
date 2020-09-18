var express = require('express');
var router = express.Router();

var registerUserController = require("../controllers/registerUserController");

router.post("/",registerUserController.registerUser);

module.exports = router;