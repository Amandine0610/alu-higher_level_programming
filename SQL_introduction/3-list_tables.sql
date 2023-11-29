-- a script that lists all the tables of a database in my MySQL
USE `mysql`;

CREATE TABLE table_1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE table_2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data TEXT
);

CREATE TABLE table_3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value DECIMAL(10, 2)
);
