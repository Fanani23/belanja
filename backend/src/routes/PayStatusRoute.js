const express = require("express");
const router = express.Router();
const { payStatusController } = require("../controllers/PayStatusController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkPayStatus } = require("../middleware/CheckPayStatus");

router.get("/", protect, payStatusController.get);
router.get("/:id", protect, payStatusController.getByID);
router.post(
  "/",
  protect,
  roleAdmin,
  checkPayStatus,
  payStatusController.create
);
router.put(
  "/:id",
  protect,
  roleAdmin,
  checkPayStatus,
  payStatusController.update
);
router.delete("/:id", protect, roleAdmin, payStatusController.delete);

module.exports = router;
