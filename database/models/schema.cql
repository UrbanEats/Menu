
USE opentable; 

DROP TABLE IF EXISTS menus;

CREATE TABLE menus (
  id INT,
  restaurant_id INT,
  food_option TEXT,
  food_category TEXT,
  meal_name TEXT,
  meal_description TEXT,
  meal_price INT,
  PRIMARY KEY (restaurant_id, id)
);
