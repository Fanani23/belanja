const { response } = require(`./Common`);
const jwt = require("jsonwebtoken");

var key = process.env.JWT_KEY;

const role = (req, res, next) => {
  if (req.params.role == `admin` || req.params.role == `customer`) {
    return next();
  }
  return response(res, 404, false, null, `Wrong user's role!`);
};

const protect = (req, res, next) => {
  try {
    var token;
    if (req.headers.authorization) {
      let auth = req.headers.authorization;
      token = auth.split(" ")[1];
      let decode = jwt.verify(token, key);
      req.payload = decode;
      next();
    } else {
      return response(res, 404, false, null, `Server need token!`);
    }
  } catch (err) {
    console.log(err);
    if (err && err.name == "JsonWebTokenError") {
      return response(res, 404, false, null, `Invalid token!`);
    } else if (err && err.name == "TokenExpiredError") {
      return response(res, 404, false, null, `Expired token!`);
    } else {
      return response(res, 404, false, null, `Token is not active!`);
    }
  }
};

module.exports = { role, protect };
