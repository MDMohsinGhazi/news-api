const express = require("express");

const router = express.Router();

const { topHeadlines, everything } = require("../controller/news");

router.get("/headlines", topHeadlines);
router.get("/everything", everything);

module.exports = router;
