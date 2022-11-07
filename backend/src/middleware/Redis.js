const client = require("../config/Redis");
const { response } = require("./Common");

const hitCache = async (req, res, next) => {
  const id = req.params.id;
  const product = await client.get(`product/${id}`);
  if (product) {
    return response(
      res,
      200,
      true,
      JSON.parse(product),
      "Get product from redis"
    );
  }
  next();
};

const clearCache = async (req, res, next) => {
  const id = req.params.id;
  client.del(`product/${id}`);
  next();
};

module.exports = { hitCache, clearCache };
