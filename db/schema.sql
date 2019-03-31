-- Create the database burgers_db and specified it for use
CREATE DATABASE burgersDb;
USE burgersDb;

-- Create Burgers Table
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burgerName varchar(255) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY(id)
)

