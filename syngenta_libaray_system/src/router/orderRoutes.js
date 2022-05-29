const express  = require("express");

const router =  express.Router();
const orderController =  require("../controllers/orderController");


router
.route("/")
.post(orderController.orderBooks)
.get(orderController.getOrders);



router.route("/:id").post(orderController.returnBooks);


module.exports =  router;
