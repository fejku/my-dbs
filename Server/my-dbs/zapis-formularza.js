const db = require('../db');

const zapisFormularza = async (req, res) => {
  const { baza, wersjaPumy, schematy } = req.body;

  await db.query(`update ostatnio_uzyte set baza = $1, fk_wepu = $2;`, 
    [baza, wersjaPumy]);

  
  for (const schemat of schematy) {
    await db.query(`update wersja_schematu set wersja_schematu = $1 where id = $2`, 
      [schemat.wersja_schematu, schemat.id]);
  }

  res.sendStatus(200);
}

module.exports = zapisFormularza;