const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers/CategoryController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkCategory } = require("../middleware/CheckCategory");

router.get("/", protect, categoryController.get);
router.get("/:id", protect, categoryController.getByID);
router.post("/", protect, roleAdmin, checkCategory, categoryController.create);
router.put(
  "/:id",
  protect,
  roleAdmin,
  checkCategory,
  categoryController.update
);
router.delete("/:id", protect, roleAdmin, categoryController.delete);

module.exports = router;
