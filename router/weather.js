const express = require("express");
const router = express.Router();

const { getWeather } = require("../controller/weather");

router.get("/", getWeather);

module.exports = router;
