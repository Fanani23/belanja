const express = require("express");
const router = express.Router();
const { payMethodController } = require("../controllers/PayMethodController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkPayMethod } = require("../middleware/CheckPayMethod");

router.get("/", protect, payMethodController.get);
router.get("/:id", protect, payMethodController.getByID);
router.post(
  "/",
  protect,
  roleAdmin,
  checkPayMethod,
  payMethodController.create
);
router.put(
  "/:id",
  protect,
  roleAdmin,
  checkPayMethod,
  payMethodController.update
);
router.delete("/:id", protect, roleAdmin, payMethodController.delete);

module.exports = router;
