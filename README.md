# node-mysql-cli

This source code is an prototype of basebook management system, focusing on integrating an external database. We're using a book management system as an example to demonstrate CRUD operations. (Create, Read, Delete, and not UPDATE actually.)

Before you run the codes, you'll need an external MySQL Database and to install Node.js and npm and You'll have to create an .env file by referring to .env.example.

This project is an assignment for the Database System course.

## Usage

-   type command `npm start add [Book ID] [Book Name] [Publisher] [Price]` to add book
-   type command `npm start search [Keyword]` to search book
-   type command `npm start delete [Book Name]` to remove book
