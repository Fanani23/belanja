const Pool = require("../config/Database");

const getCategory = () => {
  return Pool.query(`SELECT * FROM category`);
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

const searchCategory = (name) => {
  return Pool.query(
    `SELECT * FROM category
    WHERE category_name
    ILIKE '%${name}%'`
  );
};

const filterCategory = (sortby, sort, limit, page) => {
  return Pool.query(
    `SELECT * FROM category
    ORDER BY ${sortby} ${sort}
    LIMIT ${limit}
    OFFSET ${(page - 1) * limit}`
  );
};

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  searchCategory,
  filterCategory,
};
