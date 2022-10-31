const validateStock = (req, res, next) => {
  const { product_name, stock, price } = req.body;
  let err = [];
  try {
    if (!product_name || !isNaN(product_name) || product_name.lenght < 4) {
      err.push(`Product name must be more than 4 character!`);
    }
    if (!stock || isNaN(stock)) {
      err.push(`Stock must be number and not 0!`);
    }
    if (!price || !isNaN(price)) {
      err.push(`Price must be more than 4 character!`);
    }
    if (err.length > 0) {
      throw new Error(err.toString());
    }
    next();
  } catch (err) {
    res.json({ error: `${err}` });
  }
};

module.exports = { validateStock };
