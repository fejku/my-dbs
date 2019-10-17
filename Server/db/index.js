const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: 'Makaron86',
  host: 'localhost',
  port: 5433,
  database: 'mydbs',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}