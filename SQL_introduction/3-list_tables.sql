-- a script that lists all the tables of a database in my MySQL
USE INFORMATION_SCHEMA;
SELECT table_name
FROM tables
WHERE table_schema = 'mysql';
