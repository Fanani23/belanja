const jwt = require("jsonwebtoken");

var key = process.env.JWT_KEY;

const generateToken = (payload) => {
  const verifyOpts = {
    expiresIn: "2h",
  };
  const token = jwt.sign(payload, key, verifyOpts);
  return token;
};

module.exports = { generateToken };
