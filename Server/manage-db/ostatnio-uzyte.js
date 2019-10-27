const db = require('../db');

const dajOstatnioUzyte = async (req, res) => {
  try {
    const result = await db.query(`select baza, fk_wepu::text, fk_pola::text from mydbs.ostatnio_uzyte`);
    
    const ostatnioUzyte = result.rows[0];

    res.json(ostatnioUzyte);
  } catch(err) {
    console.log(err);    
  }
}

module.exports = {
  dajOstatnioUzyte,
}