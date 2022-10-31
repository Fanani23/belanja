const express = require("express");
const router = express.Router();
const {
  transactionController,
} = require("../controllers/TransactionController");

router.get("/", transactionController.get);
router.get("/search", transactionController.search);
router.get("/filter", transactionController.filter);
router.post("/", transactionController.create);
router.put("/:id", transactionController.update);
router.delete("/:id", transactionController.delete);

module.exports = router;
