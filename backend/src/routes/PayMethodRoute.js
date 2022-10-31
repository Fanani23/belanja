const express = require("express");
const router = express.Router();
const { payMethodController } = require("../controllers/PayMethodController");
const { checkPayMethod } = require("../middleware/CheckPayMethod");

router.get("/", payMethodController.get);
router.get("/search", payMethodController.search);
router.get("/filter", payMethodController.filter);
router.post("/", checkPayMethod, payMethodController.create);
router.put("/:id", checkPayMethod, payMethodController.update);
router.delete("/:id", payMethodController.delete);

module.exports = router;
