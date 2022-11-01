const { createClient } = require("redis");

const client = createClient(6379);

client.on("error", (err) => {
  console.log("Redis client error", err);
});

client.connect();

module.exports = client;
