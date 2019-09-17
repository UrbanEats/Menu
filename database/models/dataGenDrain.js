const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./database/models/data/test.csv');

const foodOptions = ['Bar', 'Dinner', 'Brunch', 'Lunch'];

const foodCategories = ['Appetizers', 'Entrees', 'Small Plates', 'Soups & Salads', 'Desserts', 'Cocktails'];

const generateMenus = (writer, callback) => {
  console.log(new Date);
  const field_names = 'restaurant_id,food_option,food_category,meal_name,meal_description,meal_price';
  file.write(field_names + '\n');
  let r_id = 0;
  let id = 0;
  const numR = 1000000;
  const write = () => {
    let ok = true;
    do {
      r_id += 1;
      const rows = [];
      const numMeals = Math.floor(Math.random()*(35-15)+15);
      for (let m = 0; m < numMeals; m ++) {
        id += 1;
        const random = Math.random();
        const meal_name = faker.lorem.word();
        const meal_description = faker.lorem.sentence();
        const meal_price = Math.floor((random*(60-5)+5)*100);
        const food_option = foodOptions[Math.floor((random*4))];
        const food_category = foodCategories[Math.floor((random*6))];
        const row = `${id},${r_id},${food_option},${food_category},${meal_name},${meal_description},${meal_price}`;
        rows.push(row);
      }
      const data = rows.join('\n');
      if (r_id === numR) {
        file.write(data, callback);
      } else {
        ok = file.write(data);
      }
    } while (r_id < numR && ok)
    if (r_id < numR) {
      file.once('drain', write);
    }
  }
  write()
}

generateMenus(file, () => {
  console.log(new Date);
  file.end();
});