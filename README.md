# Menu

> Menu module for a restaurant service

## Related Projects

  - https://github.com/CuisineInc/Reviews
  - https://github.com/CuisineInc/Reservations
  - https://github.com/CuisineInc/Photo-Gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

To seed database run
```sh
npm run seed
```

To start server and webpack watch
```sh
server-dev
react-dev
```

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

## Seeding Database
### Postgres Database
In command line, initialize postgres, create/connect to the database, if haven't already.
```sh
psql postgres
\l
create database restaurants
\c restaurants
```
Run the schema file
```sh
psql -d restaurants -a -f database/models/schema.sql
```
Run the data generation script, which outputs a file named menus.csv. Will take 15 minutes.
```sh
node database/models/dataGenerator.js
```
Now there is a file in database/models/data named menus.csv. Import it into your postgres database. Then add an index on the restaurant_id.
```sh
psql postgres
\COPY meals(restaurant_id,food_option,food_category,meal_name,meal_description,meal_price) FROM '/filepath/menus.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX r_id ON meals (restaurant_id);
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