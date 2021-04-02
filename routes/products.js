const express = require("express");
const authMiddleware = require("../middlewares/login");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.get);
router.post("/", authMiddleware.auth, productsController.post);
router.delete("/:id", authMiddleware.auth, productsController.delete);

module.exports = router;
