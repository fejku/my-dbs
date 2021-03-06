const { Pool, Client } = require('pg')
const config = require('./config');

const pool = new Pool(config);

const polacz = async (nazwaBazy) => {
  config.database = nazwaBazy;
  const client = new Client(config);
  await client.connect();
  return client;
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  polacz,
}