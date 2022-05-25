# Sazim Graphql Challenge

**To see the full documentation, visit [Part4_Documentation.md]()**

### Introduction
This is a simple CRUD application where users can register, login and create products. Users can edit/update/delete their products or buy/rent other products. 

I have used React and apollo graphql client for the frontend and nodejs, graphql for the backend. Postgres database is used, but the code will run in any sql databases. I have used [sequelize](https://sequelize.org/) for modeling the database because it makes working with relational data way easier.

### Installation
After forking/downloading the code, you'll notice there are two different folders in the root folder. server and client. All my server data is in the server folder and client codes are in the client folder.

#### Server 

* Open [server.js](https://github.com/ahnaf-asif/sazim-graphql-challenge/blob/main/server/server.js) file in the root and configure `APP_PORT`. It is `4000` by default.
* Open [/db/connection.js](https://github.com/ahnaf-asif/sazim-graphql-challenge/blob/main/server/db/connection.js) and configure your database.
  ```javascript
    const DB_CONNECTION = new Sequelize(
        'tableName', // table name
        'userName', // user
        'rootPassword', // password
        {
            dialect: 'postgres', // db engine
            host: 'localhost', // host
        }
    )
    ```
* Open your terminal and go to the root server folder and run npm install. 
* Then to run the server, just run `npm run dev`
* You will be able to see the graphiql tool in `localhost:<port>/graphiql`

#### Client
* open the `client/src/graphql` folder and open the `client.js` file
* Inside `client.js` file, configure graphql server link:
```javascript
const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4000/graphql" }),
]);
```
* Open your terminal and go to the `client` directory and run `npm install`
* After that, you will be able to run `npm run dev` and your react application will start at port `3000` and you can access the client via `localhost:3000`.