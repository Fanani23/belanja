const Pool = require("../config/Database");

const getCategory = (search, sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT category.id, category.category_name
    FROM category
    WHERE category.category_name
    ILIKE '%${search}%'
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

const getCategoryById = (id) => {
  return Pool.query(
    `SELECT category.id, category.category_name
    FROM category
    WHERE category.id = '${id}}'`
  );
};

const createCategory = (data) => {
  const { category_name } = data;
  return Pool.query(
    `INSERT INTO category (category_name) VALUES ('${category_name}')`
  );
};

const updateCategory = (id, data) => {
  const { category_name } = data;
  return Pool.query(
    `UPDATE category SET category_name='${category_name}' WHERE id='${id}'`
  );
};

const deleteCategory = (id) => {
  return Pool.query(`DELETE FROM category WHERE id='${id}'`);
};

module.exports = {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
