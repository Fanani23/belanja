const express = require("express");
const bodyParser = require("body-parser");
const cors = require(`cors`);
const morgan = require(`morgan`);
require(`dotenv`).config();
const xss = require(`xss-clean`);
const helmet = require(`helmet`);
const mainRouter = require("./src/routes/index");
const { response } = require("./src/middleware/Common");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(xss());
app.use(helmet());
app.use(bodyParser.json());
app.use("/", mainRouter);
app.all("*", (req, res, next) => {
  response(res, 404, false, null, "404 Not Found");
});
app.use("/", (req, res, next) => {
  res.status(202).json({ status: "Success", statusCode: 200 });
});

app.listen(port, () => {
  console.log("Server is running...");
});
