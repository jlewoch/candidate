# **Candidate**
This is an applicantion that tries to remove some of the sub contionus bias from the hiring process by removing personal info from the resume and does not display the candidates name until they have moved on to the second step. I feel this will level the playing field for eveyone. It also allows recruites\companies to have the ability to put a quantifiable weight on questions and step sections that matter more to the company. Current live view can be seen at [Candidate](https://candidate-application.herokuapp.com/)

## Getting Started

1. Install [NPM and Nodejs](https://www.npmjs.com/get-npm) 
2. create a file named .env in root folder and add KEY= put any value you would like after the = make sure the is no spaces.
3. Install and configure [postgresql](https://www.postgresql.org/download). 
    > Note: **Make sure the user you created has the read and write permissions on the database**
4. Update this development section in the [knexfile](./knexfile.js) with your username, password and database name.
    ```js
    development: {
        client: 'pg',
        connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'USER_NAME',
        password: 'PASSWORD',
        database: 'DATABASE_NAME'
        }
    ```
5. Install knex and nodemon globally using the following command for npm ```npm install -g knex nodemon```
6. In your CLI navigate to the root folder and run the migrations with```knex migrate:latest``` and then run the seeds with ```knex seed:run```. 
7. Install all dependencies in the root folder and in the [client folder](./client)
8. Navigate back to the root folder to run the application
    - Using NPM you can use the following ```npm run dev``` for development.



For development 
create a file named .env


## Prerequisites
must have mysql nodejs, and knexjs installed

## Running the tests
to be added later

## Break down into end to end tests
to be added later



## Built With
- Reactjs
- React-Router
- Expresjs
- JWT
- Nodejs
- Knexjs
- React-redux
- PostgreSql

## Versioning
1.0.0

## Authors
Jake Lewochko
