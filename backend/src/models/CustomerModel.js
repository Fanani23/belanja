const Pool = require("../config/Database");

const getCustomer = () => {
  return Pool.query(`SELECT * FROM customer`);
};

const createCustomer = (data) => {
  const { customer_name, email, customer_status } = data;
  return Pool.query(
    `INSERT INTO customer (customer_name, email, customer_status) VALUES ('${customer_name}', '${email}', '${customer_status}')`
  );
};

const updateCustomer = (id, data) => {
  const { customer_name, email, customer_status } = data;
  return Pool.query(
    `UPDATE customer SET customer_name='${customer_name}', email='${email}', customer_status='${customer_status}'`
  );
};

const deleteCustomer = (id) => {
  return Pool.query(`DELETE FROM customer WHERE id='${id}'`);
};

const searchCustomer = (name) => {
  return Pool.query(
    `SELECT * FROM customer
    WHERE customer_name
    ILIKE '%${name}%'`
  );
};

const filterCustomer = (sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT * FROM customer
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

module.exports = {
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  searchCustomer,
  filterCustomer,
};
