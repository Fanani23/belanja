const Pool = require("../config/Database");
const { search } = require("../routes/ProductRoute");

const getCustomer = () => {
  return Pool.query(
    `SELECT customer.id, customer.customer_name, customer.email, customer.customer_status
    FROM customer
    WHERE customer.customer_name
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getCustomerById = (id) => {
  return Pool.query(
    `SELECT customer.id, customer.customer_name, customer.email, customer.customer_status
    FROM customer
    WHERE customer.id = '${id}'`
  );
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

module.exports = {
  getCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
