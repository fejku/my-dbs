const db = require('../db');

const dajWersjePumy = async (req, res) => {
  try {
    const result = await db.query(`select * from mydbs.wersja_pumy`);

    res.send(result.rows);
  } catch(err) {
    res.send({
      error_code: err.code,
    });
  }
}

module.exports = {
  dajWersjePumy,
}