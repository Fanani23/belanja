const checkPayMethod = (req, res, next) => {
  const { payment_method } = req.body;
  try {
    if (payment_method === "")
      throw new Error("Payment method can't be empty!");
  } catch (err) {
    return res.status(404).send(`${err}`);
  }
  next();
};

module.exports = { checkPayMethod };
