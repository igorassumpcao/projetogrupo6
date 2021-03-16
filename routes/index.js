var express = require("express");
var router = express.Router();
var controllers = require("../controllers/index")

/* GET home page. */
router.get("/", controllers.get);

router.post("/", controllers.post);

module.exports = router;
