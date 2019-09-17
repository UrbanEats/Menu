const faker = require('faker');
const fs = require('fs');
const zlib = require('zlib');

const compress = zlib.createGzip();
const file = fs.createWriteStream('./database/models/data/menus.csv.gz');
compress.pipe(file);

const foodOptions = ['Bar', 'Dinner', 'Brunch', 'Lunch'];

const foodCategories = ['Appetizers', 'Entrees', 'Small Plates', 'Soups & Salads', 'Desserts', 'Cocktails'];

const generateMenus = (count) => {
  const field_names = 'id,restaurant_id,food_option,food_category,meal_name,meal_description,meal_price';
  file.write(field_names + '\n');
  let id = 0;
  for (let block = 0; block < count; block += 1000) {
    const rows = [];
    for (let i = block; i < block + 1000; i ++) {
      const r_id = i;
      const numMeals = Math.floor(Math.random()*(30-10)+10);
      for (let m = 0; m < numMeals; m ++) {
        id +=1 ;
        const meal_name = faker.lorem.word();
        const meal_description = faker.lorem.sentence();
        const meal_price = Math.floor((Math.random()*(60-5)+5)*100);
        const food_option = foodOptions[Math.floor((Math.random()*4))];
        const food_category = foodCategories[Math.floor((Math.random()*6))];
        const row = `${id},${r_id},${food_option},${food_category},${meal_name},${meal_description},${meal_price}`;
        rows.push(row);
      }
    }
    data = rows.join('\n')
    file.write(data + '\n');
    // console.log(block);
  }
}

console.log(new Date);
generateMenus(10000000);
console.log(new Date);