const express = require("express");
const router = express.Router();

const { getQuotes } = require("../controller/quotes");

router.get("/", getQuotes);

module.exports = router;
