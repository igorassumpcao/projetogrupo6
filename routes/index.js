const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.get);
router.post("/", indexController.get);

module.exports = router;
