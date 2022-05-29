const express = require("express");

const router = express.Router();

const { topHeadlines } = require("../controller/news");

router.get("/headlines", topHeadlines);

module.exports = router;
