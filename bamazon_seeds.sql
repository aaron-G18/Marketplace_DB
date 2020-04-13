DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INTEGER NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (100) NULL,
  department_name VARCHAR
    (100) NULL,
  price DECIMAL
    (10,2) NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Hand Sanitizer (6oz)", "Home Goods", 4.99, 5),
        ("Toilet Paper (6pk)", "Home Goods", 6.99, 5),
        ("Ballpoint Pens (Black, 6pk)", "Office", 9.99, 40),
        ("Ballpoint Pens (Blue, 6pk)", "Office", 9.99, 30),
        ("Printer Paper (white, 1 ream)", "Office", 8.49, 100),
        ("4 Person Tent", "Outdoor/Recreation", 69.99, 5),
        ("Sleeping Bag", "Outdoor/Recreation", 29.99, 10),
        ("Shampoo", "Bath & Body", 5.99, 15),
        ("Conditioner", "Bath & Body", 5.99, 15),
        ("Deodorant", "Bath & Body", 6.99, 10),
        ("Running Shoes", "Sporting Goods", 4.99, 20),
        ("Water Bottle", "Sporting Goods", 14.99, 40);

    SELECT *
    FROM products;