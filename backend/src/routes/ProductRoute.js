const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/ProductController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkProduct } = require("../middleware/CheckProduct");
const upload = require("../middleware/Upload");
const { hitCache, clearCache } = require("../middleware/Redis");

router.get(`/`, protect, productController.get);
router.get(`/:id`, protect, hitCache, productController.getByID);
router.post(
  `/`,
  protect,
  roleAdmin,
  upload.single("photo"),
  checkProduct,
  productController.create
);
router.put(
  `/:id`,
  protect,
  roleAdmin,
  upload.single("photo"),
  clearCache,
  checkProduct,
  productController.update
);
router.delete(`/:id`, protect, roleAdmin, productController.delete);

module.exports = router;
