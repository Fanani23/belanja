const Pool = require("../config/Database");

const getPayStatus = (search, sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT pay_status.id, pay_status.payment_status
    FROM pay_status
    WHERE pay_status.payment_status
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getPayStatusById = (id) => {
  return Pool.query(
    `SELECT pay_status.id, pay_status.payment_status
    FROM pay_status
    WHERE pay_status.id = '${id}'`
  );
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

module.exports = {
  getPayStatus,
  getPayStatusById,
  createPayStatus,
  updatePayStatus,
  deletePayStatus,
};
