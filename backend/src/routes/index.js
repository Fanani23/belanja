const express = require("express");
const router = express.Router();
const CategoryRouter = require("../routes/CategoryRoute");
const CustomerRouter = require("../routes/CustomerRoute");
const PayMethodRouter = require("../routes/PayMethodRoute");
const PayStatusRouter = require("../routes/PayStatusRoute");
const ProductRouter = require("../routes/ProductRoute");
const TransactionRouter = require("../routes/TransactionRoute");
const UsersRouter = require("../routes/UsersRoute");

router.use("/category", CategoryRouter);
router.use("/customer", CustomerRouter);
router.use("/pay_method", PayMethodRouter);
router.use("/pay_status", PayStatusRouter);
router.use("/product", ProductRouter);
router.use("/transaction", TransactionRouter);
router.use("/users", UsersRouter);

module.exports = router;
