const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'opentable' });
const { Pool, Client } = require('pg')
const pool = new Pool({
    host: 'localhost',
    database: 'restaurants'
});

const randomRestaurantGen = () => {
  return Math.floor(Math.random()*10000000);
}

const queryTimer = (restaurant) => {

  const cassandraTest = (rID) => {
    const query = 'SELECT * FROM menus WHERE restaurant_id = ' + rID;
    const start = new Date;
    client.execute(query, (err, result) => {
      const end = new Date;
      if (err) throw err;
      console.log('Operation time for Cassandra to retrieve restaurant ', rID, ', ', result.rows.length, ' rows:', end - start, 'ms');
      client.shutdown();
    });
  }

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

  cassandraTest(restaurant);
  postgresTest(restaurant);
}

// let randR = randomRestaurantGen();
// queryTimer(randR);

// const query = 'SELECT * FROM menus WHERE restaurant_id = 222222';
// client.execute(query, (err, result) => {
//   if (err) throw err;
//   console.log(result.rows);
//   client.shutdown();
// });

const query = 'SELECT * FROM menus WHERE restaurant_id = 222222';
pool.query(query, (err, result) => {
  const end = new Date;
  if (err) throw err;
  console.log(result.rows);
  pool.end();
})

