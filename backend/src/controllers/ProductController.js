const productModel = require("../models/ProductModel");

const productController = {
  get: (req, res, next) => {
    const search = req.query.search || "";
    const sortby = req.query.sortby || "price";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    productModel
      .getProduct(search, sortby, sort, limit, page)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res
          .status(404)
          .send({ msg: "Can't get product data!", err: err.message });
      });
  },
  getByID: (req, res, next) => {
    productModel
      .getProductById(req.params.id)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },

  create: (req, res, next) => {
    const Port = process.env.PORT;
    const Host = process.env.HOST;
    const photo = req.file.filename;
    const url = `http://${Host}:${Port}/image/${photo}`;
    req.body.photo = url;
    req.body.stock = parseInt(req.body.stock);
    req.body.price = parseInt(req.body.price);
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
};

exports.productController = productController;
