const db = require('../db');

const zapisFormularza = async (req, res) => {
  const { baza, wersjaPumy, schematy } = req.body;

  let client;
  try {
    await db.query(`update ostatnio_uzyte set baza = $1, fk_wepu = $2;`, 
      [baza, wersjaPumy]);
    
    client = db.dajKlienta(baza);
    await client.connect();
    await client.query(`begin`);
    for (const schemat of schematy) {
      await db.query(`update wersja_schematu set wersja_schematu = $1 where id = $2`, 
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

module.exports = zapisFormularza;