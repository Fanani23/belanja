const checkPayStatus = (req, res, next) => {
  const { payment_status } = req.body;
  try {
    if (payment_status === "")
      throw new Error("Payment status can't be empty!");
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

module.exports = { checkPayStatus };
