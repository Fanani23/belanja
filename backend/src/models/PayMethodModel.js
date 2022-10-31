const Pool = require("../config/Database");

const getPayMethod = () => {
  return Pool.query(`SELECT * FROM pay_method`);
};

const createPayMethod = (data) => {
  const { payment_method } = data;
  return Pool.query(
    `INSERT INTO pay_method (payment_method) VALUES ('${payment_method}')`
  );
};

const updatePayMethod = (id, data) => {
  const { payment_method } = data;
  return Pool.query(
    `UPDATE pay_method SET payment_method='${payment_method}' WHERE id='${id}'`
  );
};

const deletePayMethod = (id) => {
  return Pool.query(`DELETE FROM pay_method WHERE id='${id}'`);
};

const searchPayMethod = (name) => {
  return Pool.query(
    `SELECT * FROM pay_method
    WHERE payment_method
    ILIKE '%${name}%'`
  );
};

const filterPayMethod = (sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT * FROM pay_method
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

module.exports = {
  getPayMethod,
  createPayMethod,
  updatePayMethod,
  deletePayMethod,
  searchPayMethod,
  filterPayMethod,
};
