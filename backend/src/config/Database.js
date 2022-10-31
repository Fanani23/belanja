const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db_belanja",
  password: "1",
  port: 5432,
});

module.exports = pool;
