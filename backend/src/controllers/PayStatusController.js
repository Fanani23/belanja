const payStatusModel = require("../models/PayStatusModel");

const payStatusController = {
  get: (req, res, next) => {
    const search = req.query.search || "";
    const sortby = req.query.sortby || "payment_status";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    payStatusModel
      .getPayStatus(search, sortby, sort, limit, page)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Can't get payment status data!", err });
      });
  },
  getByID: (req, res, next) => {
    payStatusModel
      .getPayStatusById(req.params.id)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  create: (req, res, next) => {
    payStatusModel
      .createPayStatus(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New payment status created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  update: (req, res, next) => {
    payStatusModel
      .updatePayStatus(req.params.id, req.body)
      .then((result) => {
        res
          .status(200)
          .send({ msg: "Payment status data updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  delete: (req, res, next) => {
    payStatusModel
      .deletePayStatus(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Payment status data deleted!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
};

exports.payStatusController = payStatusController;
