const express = require("express");
const router = express.Router();
const {
  transactionController,
} = require("../controllers/TransactionController");
const { protect } = require("../middleware/Auth");

router.get("/", protect, transactionController.get);
router.get("/:id", protect, transactionController.getByID);
router.post("/", protect, transactionController.create);
router.put("/:id", protect, transactionController.update);
router.delete("/:id", protect, transactionController.delete);

module.exports = router;
