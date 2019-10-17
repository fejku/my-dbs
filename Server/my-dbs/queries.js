const db = require('../db');

const dajBazy = async() => {
  const result = await db.query(
    `select datname from pg_database where (not datistemplate) and datname not in ('postgres', 'mydbs')`
    );

  return result.rows.map(res => res.datname);
}

const dajPumaWersje = async () => {
  const result = await db.query(
    `select * from puma`
  );

  return result.rows;
}

const dajOstatnioUzyte = async () => {
  const result = await db.query(`
    select * from ostatnio_uzyte
  `);

  if (result.rowCount > 0)
    return result.rows[0]
  else
    return {
      baza: '',
      schemat: 1,
    }
}

const dajWersjeSchematow = async (req, res) => {
  console.log(req.params);

  const result = await db.query(
    `select w.id, s.nazwa as nazwa_schematu, w.wersja_schematu
      from wersja w
      join schemat s on s.id = w.fk_schemat
      where w.fk_puma = $1`,
      [req.params.id]
  );

  res.json(result.rows);
}

const dajDaneDoFormularza = async(req, res) => {
  const bazy = await dajBazy();
  const wersjePumy = await dajPumaWersje();
  const ostatnioUzyte = await dajOstatnioUzyte();

  res.json({
    bazy,
    wersjePumy,
    ostatnioUzyte,
  });
}

module.exports = {
  dajDaneDoFormularza,
  dajWersjeSchematow,
}