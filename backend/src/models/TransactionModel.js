const Pool = require("../config/Database");

const getTransaction = (search, sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT transaction.id, customer.customer_name as customer_name, product.product_name as product_name, transaction.ammount, transaction.grand_total, pay_method.payment_method as payment_method, pay_status.payment_status as payment_status
    FROM transaction
    INNER JOIN customer ON transaction.customer_id = customer.id
    INNER JOIN product ON transaction.product_id = product.id
    INNER JOIN pay_method ON transaction.pay_method_id = pay_method.id
    INNER JOIN pay_status ON transaction.pay_status_id = pay_status.id
    WHERE customer_name
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getTransactionById = (id) => {
  return Pool.query(
    `SELECT transaction.id, customer.customer_name as customer_name, product.product_name as product_name, transaction.ammount, transaction.grand_total, pay_method.payment_method as payment_method, pay_status.payment_status as payment_status
    FROM transaction
    INNER JOIN customer ON transaction.customer_id = customer.id
    INNER JOIN product ON transaction.product_id = product.id
    INNER JOIN pay_method ON transaction.pay_method_id = pay_method.id
    INNER JOIN pay_status ON transaction.pay_status_id = pay_status.id
    WHERE transaction.id = '${id}'`
  );
};

const createTransaction = (data) => {
  const {
    customer_id,
    product_id,
    ammount,
    grand_total,
    pay_method_id,
    pay_status_id,
  } = data;
  return Pool.query(
    `INSERT INTO transaction (customer_id, product_id, ammount, grand_total, pay_method_id, pay_status_id) VALUES (${customer_id}, ${product_id}, ${ammount}, ${grand_total}, ${pay_method_id}, ${pay_status_id})`
  );
};

const updateTransaction = (id, data) => {
  const {
    customer_id,
    product_id,
    ammount,
    grand_total,
    pay_method_id,
    pay_status_id,
  } = data;
  return Pool.query(
    `UPDATE transaction SET customer_id='${customer_id}', product_id='${product_id}', ammount='${ammount}', grand_total='${grand_total}', pay_method_id='${pay_method_id}', pay_status_id='${pay_status_id}' WHERE id='${id}'`
  );
};

const deleteTransaction = (id) => {
  return Pool.query(`DELETE FROM transaction WHERE id='${id}'`);
};

module.exports = {
  getTransaction,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
