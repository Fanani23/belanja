const express = require("express");
const router = express.Router();
const { categoryController } = require("../controllers/CategoryController");
// const { protect, roleAdmin } = require("../middleware/Auth");
const { checkCategory } = require("../middleware/CheckCategory");

router.get("/", categoryController.get);
router.get("/:id", categoryController.getByID);
router.post("/", checkCategory, categoryController.create);
router.put(
  "/:id",

  checkCategory,
  categoryController.update
);
router.delete("/:id", categoryController.delete);

module.exports = router;
