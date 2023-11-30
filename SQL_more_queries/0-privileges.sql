-- Lists all privileges of the MySQL users user_0d_1 and user_0d_2
mysql -u root -p -e "SHOW GRANTS FOR 'user_0d_1'@'localhost';"
mysql -u root -p -e "SHOW GRANTS FOR 'user_0d_2'@'localhost';"
