var express = require('express');
var router = express.Router();

var filterByGenereController = require("../controllers/filterByGenereController");

router.get("/",filterByGenereController.filterByGenere);

module.exports = router;