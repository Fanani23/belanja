const express = require("express");
const router = express.Router();
const { customerController } = require("../controllers/CustomerController");
const { checkCustomer } = require("../middleware/CheckCustomer");

router.get("/", customerController.get);
router.get("/search", customerController.search);
router.get("/filter", customerController.filter);
router.post("/", checkCustomer, customerController.create);
router.put("/:id", checkCustomer, customerController.update);
router.delete("/:id", customerController.delete);

module.exports = router;
