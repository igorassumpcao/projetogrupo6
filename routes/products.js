const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.get);
router.post("/", productsController.post);
router.delete("/", productsController.delete);

module.exports = router;
