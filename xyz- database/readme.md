* we are using postgres sql here for database

* you can easily download the postgres from internet 
then we have to give the postgress bin folder path to the enviroment variable 

* you can create the table in the postgress by following command

        createdb -U postgres name_of_the_db

* then we go to the postgres mode

        psql -U postgres name_of_the_database

now we are successfully connected to the database 

* to create the table

        CREATE TABLE table_name (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255));

* you can see how many tables are prsent by using following command

        \dt

* you can insert into columns by following command

        INSERT INTO table_name (name,email) VALUES ('john','john@doe.com');

* you can see all the data inside the table by following command

        SELECT * FROM userone;

* you can also go to the pgAdmin 4 which the GUI for postgres sql