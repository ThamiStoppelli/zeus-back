const express = require("express");
const router = express.Router();

router.use("/data", require("./dataRoutes"));

module.exports = router;