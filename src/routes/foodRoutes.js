const express = require("express");
const controller = require("../controller/foodController")

const router = express.Router();

router.post("/create", controller.create);
router.get("/list", controller.list);
router.get("/getOne/:id", controller.getOne);
router.delete("/delete/:id", controller.delete);
router.put("/update/:id", controller.update);
router.get("/totalPrice", controller.totalPrice);
router.get("/totalAmount", controller.totalAmount);

router.get("/totalMonthlyPrice", controller.totalMonthlyPrice);
router.get("/totalMonthlyAmount", controller.totalMonthlyAmount);


module.exports = router;