const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "2024",
  database: "mahasiswa_db",
});

module.exports = pool;
