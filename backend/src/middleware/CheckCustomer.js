const checkCustomer = (req, res, next) => {
  const { customer_name, email, customer_status } = req.body;
  try {
    if (customer_name === "") throw new Error("Customer name can't be empty!");
    if (email === "") throw new Error("Email can't be empty!");
    if (customer_status === "")
      throw new Error("Customer status can't be empty!");
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

module.exports = { checkCustomer };
