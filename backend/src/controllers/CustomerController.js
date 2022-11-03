const customerModel = require("../models/CustomerModel");

const customerController = {
  get: (req, res, next) => {
    const search = req.query.search || "";
    const sortby = req.query.sortby || "customer_name";
    const sort = req.query.sort || "asc";
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    customerModel
      .getCustomer(search, sortby, sort, limit, page)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => [
        res.status(404).send({ msg: "Can't get customer data!", err }),
      ]);
  },
  getByID: (req, res, next) => {
    customerModel
      .getCustomerById(req.params.id)
      .then((result) => {
        res.status(200).send({ result: result.rows });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  create: (req, res, next) => {
    customerModel
      .createCustomer(req.body)
      .then((result) => {
        res.status(200).send({ msg: "New customer created!" });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  update: (req, res, next) => {
    customerModel
      .updateCustomer(req.params.id, req.body)
      .then((result) => {
        res.status(200).send({ msg: "Customer data updated!", data: result });
      })
      .catch((err) => {
        res.status(404).send({ msg: "Failed", err });
      });
  },
  delete: (req, res, next) => {
    customerModel
      .deleteCustomer(req.params.id)
      .then((result) => {
        res.status(200).send({ msg: "Customer data deleted!" });
      })
      .catch((err) => {
        req.status(404).send({ msg: "Failed", err });
      });
  },
};

exports.customerController = customerController;
