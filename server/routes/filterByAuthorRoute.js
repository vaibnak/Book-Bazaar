var express = require('express');
var router = express.Router();

var filterByAuthorController = require("../controllers/filterByAuthorController");

router.get("/",filterByAuthorController.filterByAuthor);

module.exports = router;