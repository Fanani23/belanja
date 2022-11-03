const Pool = require("../config/Database");

const getPayMethod = () => {
  return Pool.query(
    `SELECT pay_method.id, pay_method.payment_method
    FROM pay_method
    WHERE pay_method.payment_method
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getPayMethodById = (id) => {
  return Pool.query(
    `SELECT pay_method.id, pay_method.payment_method
    FROM pay_method
    WHERE pay_method.id = '${id}'`
  );
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

module.exports = {
  getPayMethod,
  getPayMethodById,
  createPayMethod,
  updatePayMethod,
  deletePayMethod,
};
