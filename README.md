# Menu

> Menu module for a restaurant service

## Related Projects

  - https://github.com/CuisineInc/Reviews
  - https://github.com/CuisineInc/Reservations
  - https://github.com/CuisineInc/Photo-Gallery

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)
1. [Data-Generation](#Data-Generation)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Usage

> Some usage instructions

To seed database with 100 restaurant data run
```sh
npm run seed
```

To start server and webpack watch
```sh
server-dev
react-dev
```

## Data-Generation
### Generating CSV File for 10M Restaurants
Run the data generation script, which outputs a file database/models/menus.csv. Will take 15 minutes.
```sh
node database/models/dataGenerator.js
```
### Postgres Database
In command line, initialize postgres, create/connect to the database, if haven't already.
```sh
psql postgres
\l
create database restaurants
\c restaurants
```
Exit psql and run the schema file in command line.
```sh
psql -d restaurants -a -f database/models/schema.sql
```
Import the menus.csv into your postgres database. Then add an index on the restaurant_id.
```sh
psql postgres
\COPY meals(restaurant_id,food_option,food_category,meal_name,meal_description,meal_price) FROM '/filepath/menus.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX r_id ON meals (restaurant_id);
```
### Cassandra Database
In command line, initialize Cassandra to create a keyspace, if haven't aleady.
```sh
cqlsh
create keyspace opentable with replication = {'class':'SimpleStrategy', 'replication_factor' : 3};
```
Exit then run the schema file to create a table.
```sh
cqlsh -f database/models/schema.sql -k opentable
```

## RESTful API

### CRUD Operations
- Creating (POST)
```sh
url: "/api/restaurants/:rid/menu"
input:
{ food_option: string,
  food_category: string,
  meal_name: {
    meal_description: string,
    meal_price: decimal number
  }
}
response:
post success message, menuId
```
- Reading (GET)
```sh
url: "/api/restaurants/:rid/menu"
response:
{ menuId: integer,
food_option: string,
  food_category: string,
  meal_name: {
    meal_description: string,
    meal_price: decimal number
  }
}
```
- Updating (PUT)
```sh
url: "/api/restaurants/:rid/menu"
input:
{ menuId: integer,
food_option: string,
  food_category: string,
  meal_name: {
    meal_description: string,
    meal_price: decimal number
  }
}
response:
put success message, menuId
 
```
- Deleting (DELETE)
```sh
url: "/api/restaurants/:rid/menu"
response:
delete success message
```