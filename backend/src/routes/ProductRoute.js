const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/ProductController");
const { validateStock } = require("../helper/ValidateStock");
const { protect, role } = require("../middleware/Auth");
const { checkProduct } = require("../middleware/CheckProduct");
const upload = require("../middleware/Upload");

router.get(`/`, protect, productController.get);
router.get(`/:id`, protect, productController.getByID);
router.post(
  `/`,
  protect,
  upload.single("photo"),
  checkProduct,
  productController.create
);
router.put(`/:id`, protect, checkProduct, productController.update);
router.delete(`/:id`, protect, productController.delete);

module.exports = router;
