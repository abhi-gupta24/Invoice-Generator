const express = require("express");
const { addProducts } = require("../controllers/productController");
const { authMiddleware } = require("../utils/jwt");
const router = express.Router();

router.post("/add-products", authMiddleware, addProducts);

module.exports = router;
