const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./database/models/data/menus.csv');

const foodOptions = ['Bar', 'Dinner', 'Brunch', 'Lunch'];

const foodCategories = ['Appetizers', 'Entrees', 'Small Plates', 'Soups & Salads', 'Desserts', 'Cocktails'];

const generateMenus = (count) => {
  const field_names = 'restaurant_id,food_option,food_category,meal_name,meal_description,meal_price';
  file.write(field_names + '\n');
  for (var block = 0; block <= count; block += 1000) {
    const rows = [];
    for (var i = block; i < block + 1000; i ++) {
      const r_id = i;
      const numMeals = Math.floor(Math.random()*(30-10)+10);
      for (var m = 0; m < numMeals; m ++) {
        const meal_name = faker.lorem.word();
        const meal_description = faker.lorem.sentence();
        const meal_price = Math.floor((Math.random()*(60-5)+5)*100);
        const food_option = foodOptions[Math.floor((Math.random()*4))];
        const food_category = foodCategories[Math.floor((Math.random()*6))];
        const menu_row = [
          r_id,
          food_option,
          food_category,
          meal_name,
          meal_description,
          meal_price
        ];
        const row = r_id + ',' + food_option + ',' + food_category + ',' + meal_name + ',' + meal_description + ',' + meal_price;
        rows.push(row);
      }
    }
    data = rows.join('\n')
    file.write(data + '\n');
    console.log(block);
  }
  console.log('done');
}

generateMenus(10000000);
// 10000000

// const generateRestaurants = (count) => {
//   const restaurants = [];
//   for (var i = 0; i < count; i ++) {
//     const r_name = 'r' + i;
//     restaurants.push(r_name);
//   }
//   console.log(restaurants.length);
// }
// generateRestaurants(10000000);