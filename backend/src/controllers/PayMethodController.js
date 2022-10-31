const payMethodModel = require("../models/PayMethodModel");

const payMethodController = {
  get: (req, res, next) => {
    payMethodModel
      .getPayMethod()
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Can't get payment method data!", err });
      });
  },
  create: (req, res, next) => {
    payMethodModel
      .createPayMethod(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New payment method created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  update: (req, res, next) => {
    payMethodModel
      .updatePayMethod(req.params.id, req.body)
      .then((result) => {
        res
          .status(200)
          .send({ msg: "Payment method data updated!", data: result });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  delete: (req, res, next) => {
    payMethodModel
      .deletePayMethod(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Payment method data deleted!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  search: (req, res, next) => {
    const name = req.query.name || "";
    payMethodModel
      .searchPayMethod(name)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  filter: (req, res, next) => {
    const sortby = req.query.sortby || "payment_method";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    payMethodModel
      .filterPayMethod(sortby, sort, limit, page)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
};

exports.payMethodController = payMethodController;
