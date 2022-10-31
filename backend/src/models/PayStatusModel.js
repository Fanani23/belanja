const Pool = require("../config/Database");

const getPayStatus = () => {
  return Pool.query(`SELECT * FROM pay_status`);
};

const createPayStatus = (data) => {
  const { payment_status } = data;
  return Pool.query(
    `INSERT INTO pay_status (payment_status) VALUES ('${payment_status}')`
  );
};

const updatePayStatus = (id, data) => {
  const { payment_status } = data;
  return Pool.query(
    `UPDATE pay_status SET payment_status='${payment_status}' WHERE id='${id}'`
  );
};

const deletePayStatus = (id) => {
  return Pool.query(`DELETE FROM pay_status WHERE id='${id}'`);
};

const searchPayStatus = (name) => {
  return Pool.query(
    `SELECT * FROM pay_status
    WHERE payment_status
    ILIKE '%${name}%'`
  );
};

const filterPayStatus = (sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT * FROM pay_status
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

module.exports = {
  getPayStatus,
  createPayStatus,
  updatePayStatus,
  deletePayStatus,
  searchPayStatus,
  filterPayStatus,
};
