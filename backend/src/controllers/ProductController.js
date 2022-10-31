const productModel = require("../models/ProductModel");

const productController = {
  get: (req, res, next) => {
    productModel
      .getProduct()
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res
          .status(404)
          .send({ msg: "Can't get product data!", err: err.message });
      });
  },
  create: (req, res, next) => {
    productModel
      .createProduct(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New product created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err: err.message });
      });
  },
  update: (req, res, next) => {
    productModel
      .updateProduct(req.params.id, req.body)
      .then((result) => {
        res.status(200).send({ msg: "Product data updated!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err: err.message });
      });
  },
  delete: (req, res, next) => {
    productModel
      .deleteProduct(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Product data deleted!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err: err.message });
      });
  },
  search: (req, res, next) => {
    const name = req.query.name || "";
    productModel
      .searchProduct(name)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err: err.message });
      });
  },
  filter: (req, res, next) => {
    const sortby = req.query.sortby || "price";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    productModel
      .filterProduct(sortby, sort, page, limit)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err: err.message });
      });
  },
};

exports.productController = productController;
