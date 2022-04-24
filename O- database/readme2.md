# SQL 

## create table

        CREATE TABLE Table_Name (colum_name data_type, colum_name datatype,.,.,.,.....);

        here the postgres datatypes are 
        string datatypes: char varchar text etc....
        numeric datatype: integer bigint smallint int bool money etc....
        date/ time datatype: date timestamp time etc....

## \d 
list of all relations/tables of the postgres

## \q
exit from the command line of postgress

## insert

        INSERT INTO Table_Name (colum_name1, column_name2,....) VALUES (value1, value2,....);

## select 

        SELECT column_name_x, column_name_y FROM Table_name;

## *

        SELECT * FROM Table_Name;

## ALTER TABLE
if you want to add the column to the existing table tou can use the alter table

        ALTER TABLE Table_Name ADD Column_name datatype;

## UPDATE / SET / WHERE
you can update the table values by UPDATE command but you need to specify which values you want to update for that you can use WHERE and SET commands

        UPDATE Table_Name SET Column_Name = "___Value___" WHERE Column_Name = "___value___";

## AND / OR

        AND example:
        UPDATE Table_Name SET Column_Name = "___Value___" WHERE Column_Name = "___value___" AND Column_Name = "___value2___";

        OR example:
        UPDATE Table_Name SET Column_Name = "___Value___" WHERE Column_Name = "___value___" OR Column_Name = "___value2___";