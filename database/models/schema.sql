
DROP TABLE IF EXISTS menus;

CREATE TABLE menus (
  id SERIAL,
  restaurant_id INTEGER NOT NULL,
  food_option VARCHAR(50) NOT NULL,
  food_category VARCHAR(50) NOT NULL,
  meal_name VARCHAR(50) NOT NULL,
  meal_description TEXT NOT NULL,
  meal_price SMALLINT NOT NULL
);
