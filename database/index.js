const { Pool, Client } = require('pg')
const pool = new Pool({
    host: 'localhost',
    database: 'restaurants'
});

const postgresTest = (rID) => {
  const query = 'SELECT * FROM menus WHERE restaurant_id = ' + rID;
  const start = new Date;
  pool.query(query, (err, result) => {
    const end = new Date;
    if (err) throw err;
    console.log('Operation time for Postgres to retrieve restaurant ', rID, ', ', result.rows.length, ' rows:', end - start, 'ms');
    pool.end();
  })
}

module.exports = {
  save: (data) => {
    pool.query(query, (err))
  },

  find: (rID, callback) => {
    const query = 'SLECT * FROM menus WHERE restaurant_id = ' 

  },

  update: (data) => {

  },

  delete: (data) => {

  }
}