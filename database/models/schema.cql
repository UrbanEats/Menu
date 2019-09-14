
DROP TABLE IF EXISTS meals;

CREATE TABLE meals (
  id INT,
  restaurant_id INT,
  food_option TEXT,
  food_category TEXT,
  meal_name TEXT,
  meal_description TEXT,
  meal_price INT,
  PRIMARY KEY (id, restaurant_id)
);
