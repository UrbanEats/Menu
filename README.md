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

## RESTful API

### CRUD Operations
- Creating (POST)
```sh
app.post
url: "/api/:restaurantName/menu"
input:
{ mealOptions,
  foodCategories,
  foodName: {
    foodDescription,
    foodPrice
  }
}
```
- Reading (GET)
```sh
app.get
url: "/api/:restaurantName/menu"
input:
{ menuId }
```
- Updating (PUT)
```sh
app.put
url: "/api/:restaurantName/menu"
input:
{ menuId,
mealOptions,
  foodCategories,
  foodName: {
    foodDescription,
    foodPrice
  }
}
```
- Deleting (DELETE)
```sh
app.delete
url: "/api/:restaurantName/menu"
input: { menuId }
```