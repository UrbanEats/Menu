const faker = require('faker');
const fs = require('fs');
const write = fs.createWriteStream('./write');

const foodOptions = ['Bar', 'Dinner', 'Brunch', 'Cheese', 'Lunch', 'Dessert'];

const foodCategories = ['Snacks', 'Appetizers', 'Cheese', 'Entrees', 'Sides', 'Small Plates', 'Soups & Salads', 'Pastries', 'Main', 'Desserts', 'Spirits', 'Dessert Wines', 'Selection of Tea', 'Cocktails'];

const generateMenus = (count) => {
  const menus = [];
  const field_names = 'restaurant_id,food_option,food_category,meal_name,meal_description,meal_price';
  menus.push(field_names);
  for (var i = 0; i < count; i ++) {
    const r_id = i;
    const food_option_array = [];
    foodOptions.forEach((option) => {
      if (Math.random() > .5) {
        food_option_array.push(option);
      }
    });
    food_option_array.forEach((option) => {
      const food_category_array = [];
      foodCategories.forEach((category) => {
        if (Math.random() > .5) {
          food_category_array.push(category);
        }
      });
      food_category_array.forEach((category) => {
        const numMeals = Math.floor(Math.random()*(13-4)+4);
        for (var f = 0; f < numMeals; f ++) {
          const meal_name = faker.lorem.word();
          const meal_description = faker.lorem.sentence();
          const meal_price = Math.floor((Math.random()*(60-5)+5)*100)
          const menu_row = [
            r_id,
            option,
            category,
            meal_name,
            meal_description,
            meal_price
          ]
          const row = menu_row.join(',')
          menus.push(row);
        }
      });
    });
  }
  // const data = menus.join('\n')
  console.log(menus.length);
  // fs.writeFile('./database/models/menus_for_psql.csv', data, (err) => {
  //   if (err) return console.log(err);
  //   console.log('file created, ' + menus.length + ' rows');
  // })
}

generateMenus(10000);
// 10000000
