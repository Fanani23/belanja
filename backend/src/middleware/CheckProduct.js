const checkProduct = (req, res, next) => {
  const { product_name, category_id, price, stock } = req.body;
  try {
    if (product_name === "") throw new Error("Product name can't be empty!");
    if (category_id === 0) throw new Error("Category ID can't be empty!");
    if (price === 0) throw new Error("Price product can't be empty!");
    if (stock === 0) throw new Error("Stock product can't be empty!");
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

module.exports = { checkProduct };
