const db = require('../db');

const dajPolaczenia = async (req, res) => {
  try {  
    const polaczenia = await db.query('select * from mydbs.polaczenie');
    res.json(polaczenia.rows);
  } catch(err) {
    console.log(err);
  }  
}

module.exports = {
  dajPolaczenia,
}