const db = require('../db');

const dajWersjeSchematow = async (req, res) => {
  try {
    const result = await db.query(
      `select w.id, s.nazwa as nazwa_schematu, w.wersja_schematu
      from wersja_schematu w
      join schemat s on s.id = w.fk_schemat
      where w.fk_wepu = $1`,
      [req.params.id]
    );

    res.json(result.rows)
  } catch (err) {
    res.json({err_code: err.code})    
  }
}

module.exports = {
  dajWersjeSchematow,
}