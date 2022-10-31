const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/ProductController");
const { checkProduct } = require("../middleware/CheckProduct");

router.get(`/`, productController.get);
router.get(`/:id`, productController.getByID);
router.post(`/`, checkProduct, productController.create);
router.put(`/:id`, checkProduct, productController.update);
router.delete(`/:id`, productController.delete);

module.exports = router;
