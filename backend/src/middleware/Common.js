const response = (res, statusCode, status, result, msg) => {
  const printResult = {};
  printResult.success = status;
  printResult.statusCode = statusCode;
  printResult.data = result || null;
  printResult.msg = msg || null;
  res.status(statusCode).json(printResult);
};

module.exports = { response };
