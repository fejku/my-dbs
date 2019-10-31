const db = require('../db');

const dajZapisFormularza = async (req, res) => {
  const { baza, wersjaPumy, schematy, polaczenieId } = req.body;

  let client;
  try {
    await db.query(`update mydbs.ostatnio_uzyte set baza = $1, fk_wepu = $2`, 
      [baza, wersjaPumy]);
    
    const result = await db.query(`select * from mydbs.polaczenie where id = $1`, 
      [polaczenieId]);
    const polaczenie = result.rows[0];

    const config = {
      user: polaczenie.uzytkownik,
      password: polaczenie.haslo,
      host: polaczenie.host,
      port: polaczenie.port,
      database: baza,
    }

    client = await db.polacz(config);
    await client.query(`begin`);
    for (const schemat of schematy) {
      await db.query(`update mydbs.wersja_schematu set wersja_schematu = $1 where id = $2`, 
        [schemat.wersja_schematu, schemat.id]);
          
      await client.query(`update admi.moduly set wersja_schematu = $1 where nazwa_schematu = $2`, 
        [schemat.wersja_schematu, schemat.nazwa_schematu]);
    }
    await client.query('commit');
  } catch(err) {
    console.log(err);
    await client.query('rollback');
  } finally {
    client.end();
  }

  res.sendStatus(200);
}

module.exports = {
  dajZapisFormularza,
};