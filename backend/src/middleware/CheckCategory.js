const checkCategory = (req, res, next) => {
  const { category_name } = req.body;
  try {
    if (category_name === "") throw new Error("Category name can't be empty!");
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

module.exports = { checkCategory };
