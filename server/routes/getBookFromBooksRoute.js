var express = require('express');
var router = express.Router();

var getBookFromBooksController = require("../controllers/getBookFromBooksController");

router.post("/",getBookFromBooksController.getBookFromBooks);

module.exports = router;