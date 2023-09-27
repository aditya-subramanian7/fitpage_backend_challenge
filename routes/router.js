const express = require("express");
const router = express.Router();

const getTopGainers = require("../controllers/getTopGainers.js");
const getIntraday = require("../controllers/getIntraday");
const getOpenHigh = require("../controllers/getOpenHigh");
const getCCI = require("../controllers/getCCI");
const getRSI = require("../controllers/getRSI");

router.get("/getTopGainers", getTopGainers);
router.get("/getIntraday", getIntraday);
router.get("/getOpenHigh", getOpenHigh);
router.get("/getCCI", getCCI);
router.get("/getRSI", getRSI);

module.exports = router;
