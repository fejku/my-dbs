const db = require('../db');

const dajBazy = async (req, res) => {
  try {  
    const result = await db.query(
      `select datname from pg_database where (not datistemplate) and datname not in ('postgres', 'mydbs') order by datname`
      );
    
    const bazy = result.rows.map(res => res.datname); 
         
    res.json(bazy);
  } catch(err) {
    console.log(err);
  }  
}

module.exports = {
  dajBazy,
}