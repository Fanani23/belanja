const express = require("express");
const router = express.Router();
const { customerController } = require("../controllers/CustomerController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkCustomer } = require("../middleware/CheckCustomer");

router.get("/", protect, customerController.get);
router.get("/:id", protect, customerController.getByID);
router.post("/", protect, roleAdmin, checkCustomer, customerController.create);
router.put(
  "/:id",
  protect,
  roleAdmin,
  checkCustomer,
  customerController.update
);
router.delete("/:id", protect, roleAdmin, customerController.delete);

module.exports = router;
