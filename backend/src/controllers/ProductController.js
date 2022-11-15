const productModel = require("../models/ProductModel");
const { response } = require("../middleware/Common");
const client = require("../config/Redis");
const cloudinary = require("../config/Photo");

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
        client.setEx(
          `product/${req.params.id}`,
          60 * 60,
          JSON.stringify(result.rows)
        );
        response(res, 200, true, result.rows, "get data success");
      })
      .catch((err) => {
        response(res, 404, false, err, "get data fail");
      });
  },
  create: async (req, res, next) => {
    // req.body.stock = parseInt(req.body.stock);
    // req.body.price = parseInt(req.body.price);
    // req.body.category_id = parseInt(req.body.category_id);
    // const image = cloudinary.uploader.upload(req.file.path, {
    //   folder: "belanja",
    // });
    // req.body.photo = image.url;
    // // req.body.stock = parseInt(req.body.stock);
    // // req.body.price = parseInt(req.body.price);
    // console.log(image);
    // productModel
    //   .createProduct(req.body)
    //   .then((result) => {
    //     res.status(200).send({ msg: "New product created!" });
    //   })
    //   .catch((err) => {
    //     res.status(404).send({ msg: "Failed", err: err.message });
    //   });
    try {
      req.body.stock = parseInt(req.body.stock);
      req.body.price = parseInt(req.body.price);
      req.body.category_id = parseInt(req.body.category_id);
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "belanja",
      });
      req.body.photo = image.url;
      await productModel.createProduct(req.body);
      return response(res, 200, true, req.body, "Create new data");
    } catch (err) {
      return response(res, 404, false, err, "Failed");
    }
  },
  update: async (req, res, next) => {
    //
    try {
      req.body.stock = parseInt(req.body.stock);
      req.body.price = parseInt(req.body.price);
      req.body.category_id = parseInt(req.body.category_id);
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "belanja",
      });
      req.body.photo = image.url;
      await productModel.updateProduct(req.params.id, req.body);
      return response(res, 200, true, req.body, "Update new data");
    } catch (err) {
      return response(res, 404, false, err, "Failed");
    }
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
