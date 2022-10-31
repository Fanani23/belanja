const categoryModel = require("../models/CategoryModel");

const categoryController = {
  get: (req, res, next) => {
    categoryModel
      .getCategory()
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Can't get category data!", err });
      });
  },
  create: (req, res, next) => {
    categoryModel
      .createCategory(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New category created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  update: (req, res, next) => {
    categoryModel
      .updateCategory(req.params.id, req.body)
      .then((result) => {
        res.status(200).send({ msg: "Category data updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  delete: (req, res, next) => {
    categoryModel
      .deleteCategory(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Category data deleted!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  search: (req, res, next) => {
    const name = req.query.name || "";
    categoryModel
      .searchCategory(name)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  filter: (req, res, next) => {
    const sortby = req.query.sortby || "category_name";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    categoryModel
      .filterCategory(sortby, sort, limit, page)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
};

exports.categoryController = categoryController;
