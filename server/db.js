const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  database: "perntodo"
});

module.exports = pool;