const express = require("express");

const product = require("./product.route");

const router = express.Router();

router.use("api/v1", product);

module.exports = router;
