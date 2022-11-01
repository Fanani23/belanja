const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/ProductController");
const { validateStock } = require("../helper/ValidateStock");
const { protect, role } = require("../middleware/Auth");
const { checkProduct } = require("../middleware/CheckProduct");
const upload = require("../middleware/Upload");

router.get(`/`, productController.get);
router.get(`/:id`, productController.getByID);
router.post(
  `/`,
  upload.single("photo"),
  checkProduct,
  productController.create
);
router.put(`/:id`, checkProduct, productController.update);
router.delete(`/:id`, productController.delete);

module.exports = router;
