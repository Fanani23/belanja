const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/ProductController");
const { protect, roleAdmin } = require("../middleware/Auth");
const { checkProduct } = require("../middleware/CheckProduct");
const upload = require("../middleware/Upload");
// const { hitCache, clearCache } = require("../middleware/Redis");

router.get(`/`, protect, productController.get);
router.get(`/:id`, protect, productController.getByID);
router.post(
  `/`,
  upload.single("photo"),
  checkProduct,
  productController.create
);
router.put(
  `/:id`,
  upload.single("photo"),
  checkProduct,
  productController.update
);
router.delete(`/:id`, productController.delete);

module.exports = router;
