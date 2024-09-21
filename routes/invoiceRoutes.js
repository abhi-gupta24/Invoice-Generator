const express = require("express");
const { viewQuotations } = require("../controllers/invoiceController");
const { authMiddleware } = require("../utils/jwt");
const router = express.Router();

router.get("/view-quotations", authMiddleware, viewQuotations);

module.exports = router;
