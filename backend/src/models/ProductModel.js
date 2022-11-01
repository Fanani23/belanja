const Pool = require("../config/Database");

const getProduct = (search, sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT product.id, product.product_name, category.category_name as category_name, product.stock, product.price, product.photo
    FROM product 
    INNER JOIN category 
    ON product.category_id = category.id
    WHERE product.product_name
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getProductById = (id) => {
  return Pool.query(
    `SELECT product.id, product.product_name, category.category_name as category_name, product.stock, product.price, product.photo
    FROM product 
    INNER JOIN category 
    ON product.category_id = category.id
    WHERE product.id = '${id}'`
  );
};

const createProduct = (data) => {
  const { product_name, category_id, stock, price, photo } = data;
  return Pool.query(
    `INSERT INTO product (product_name, category_id, stock, price, photo) 
    VALUES ('${product_name}', '${category_id}', '${stock}', '${price}', '${photo}')`
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

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
