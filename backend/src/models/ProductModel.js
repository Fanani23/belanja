const Pool = require("../config/Database");

const getProduct = () => {
  return Pool.query(
    `SELECT product.id, product.product_name, category.category_name as category_name, product.stock, product.price
    FROM product 
    INNER JOIN category 
    ON product.category_id = category.id`
  );
};

const createProduct = (data) => {
  const { product_name, category_id, stock, price } = data;
  return Pool.query(
    `INSERT INTO product (product_name, category_id, stock, price) 
    VALUES ('${product_name}', '${category_id}', '${stock}', '${price}')`
  );
};

const updateProduct = (id, data) => {
  const { product_name, category_id, stock, price } = data;
  return Pool.query(
    `UPDATE product 
    SET product_name='${product_name}', category_id='${category_id}', stock='${stock}', price='${price}' 
    WHERE id='${id}'`
  );
};

const deleteProduct = (id) => {
  return Pool.query(
    `DELETE FROM product 
    WHERE id='${id}'`
  );
};

const searchProduct = (name) => {
  return Pool.query(
    `SELECT * FROM product 
    WHERE product_name 
    ILIKE '%${name}%'`
  );
};

const filterProduct = (sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT * FROM product 
    ORDER BY ${sortby} ${sort} 
    LIMIT ${limit} 
    OFFSET ${(page - 1) * limit}`
  );
};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
  filterProduct,
};
