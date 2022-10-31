const express = require("express");
var bodyParser = require("body-parser");
const category = require("./src/routes/CategoryRoute");
const product = require("./src/routes/ProductRoute");
const customer = require("./src/routes/CustomerRoute");
const pay_method = require("./src/routes/PayMethodRoute");
const pay_status = require("./src/routes/PayStatusRoute");
const transaction = require("./src/routes/TransactionRoute");
const app = express();

app.use(bodyParser.json());

app.use("/category", category);
app.use("/product", product);
app.use("/customer", customer);
app.use("/pay_method", pay_method);
app.use("/pay_status", pay_status);
app.use("/transaction", transaction);

app.listen(3010, () => {
  console.log("Server is running...");
});
