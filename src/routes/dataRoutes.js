const express = require("express");
const controller = require("../controller/dataController")

const router = express.Router();

router.post("/create", controller.create);
router.get("/getMany", controller.getMany);
router.get("/getOne/:id", controller.getOne);
router.delete("/delete/:id", controller.delete);

module.exports = router;