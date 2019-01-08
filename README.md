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
- Redux
- Redux Saga
- React-redux
- PostgreSql

## Versioning
1.0.0

## Authors
Jake Lewochko

##License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
