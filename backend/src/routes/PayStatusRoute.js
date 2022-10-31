const express = require("express");
const router = express.Router();
const { payStatusController } = require("../controllers/PayStatusController");
const { checkPayStatus } = require("../middleware/CheckPayStatus");

router.get("/", payStatusController.get);
router.get("/search", payStatusController.search);
router.get("/filter", payStatusController.filter);
router.post("/", checkPayStatus, payStatusController.create);
router.put("/:id", checkPayStatus, payStatusController.update);
router.delete("/:id", payStatusController.delete);

module.exports = router;
