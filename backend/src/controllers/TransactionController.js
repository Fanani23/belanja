const transactionModel = require("../models/TransactionModel");

const transactionController = {
  get: (req, res, next) => {
    const search = req.query.search || "";
    const sortby = req.query.sortby || "grand_total";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    transactionModel
      .getTransaction(search, sortby, sort, limit, page)
      .then((result) => {
        res.status(201).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Can't get transaction data!", err });
      });
  },
  getByID: (req, res, next) => {
    transactionModel
      .getTransactionById(req.params.id)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  create: (req, res, next) => {
    transactionModel
      .createTransaction(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New transaction created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  update: (req, res, next) => {
    transactionModel
      .updateTransaction(req.params.id, req.body)
      .then((result) => {
        res.status(200).send({ msg: "Transaction data updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  delete: (req, res, next) => {
    transactionModel
      .deleteTransaction(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Transaction data deleted!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
};

exports.transactionController = transactionController;
