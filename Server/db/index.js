const { Pool, Client } = require('pg')
const config = require('./config');

const pool = new Pool(config);

const dajKlienta = (nazwaBazy) => {
  configBazy = {...config};
  configBazy.database = nazwaBazy;
  return new Client(configBazy);
}

module.exports = {
  query: (text, params) => pool.query(text, params),
  dajKlienta,
}