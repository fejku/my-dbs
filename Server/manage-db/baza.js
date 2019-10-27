const db = require('../db');

const dajBazy = async (req, res) => {
  console.log(req.body);
  try {  
    const client = await db.polacz({
      user: req.body.uzytkownik,
      password: req.body.haslo,
      host: req.body.host,
      port: req.body.port,
      database: 'postgres',
    });

    const result = await client.query(
      `select datname from pg_database where (not datistemplate) and datname not in ('postgres', 'mydbs') order by datname`
    );
    
    const bazy = result.rows.map(res => res.datname); 

    await client.end();
         
    res.json(bazy);
  } catch(err) {
    res.json({
      error_code: err.code,
    })
  }  
}

module.exports = {
  dajBazy,
}