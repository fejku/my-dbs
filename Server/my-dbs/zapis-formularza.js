const db = require('../db');

const zapisFormularza = async (req, res) => {
  const { ostatnioUzytaBaza, ostatnioUzytaWersjaPumy, wersjeSchematow } = req.body;

  await db.query(`update ostatnio_uzyte set baza = $1, fk_wepu = $2;`, 
    [ostatnioUzytaBaza, ostatnioUzytaWersjaPumy]);

  for (const wersjaSchematu of wersjeSchematow) {
    await db.query(`update wersja_schematu set wersja_schematu = $1 where id = $2`, 
      [wersjaSchematu.wersja_schematu, wersjaSchematu.id]);
  }

  res.json({});
}

module.exports = zapisFormularza;