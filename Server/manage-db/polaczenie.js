const db = require('../db');

const dajPolaczenia = async (req, res) => {
  try {  
    const polaczenia = await db.query('select * from mydbs.polaczenie order by id');
    res.json(polaczenia.rows);
  } catch(err) {
    console.log(err);
  }  
}

const dodajPolaczenie = async (req, res) => {
  const { host, port, username, password } = req.body;
  try {
    const result = await db.query(`insert into mydbs.polaczenie(host, port, uzytkownik, haslo, aktualne) 
        values($1, $2, $3, $4, $5) returning *`, 
      [host, port, username, password, false]);
    res.json(result.rows[0]);
  } catch(err) {
    console.log(err);
    res.status(422).send({errors: []});
  }
}

module.exports = {
  dajPolaczenia,
  dodajPolaczenie,
}