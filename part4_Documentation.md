# Server

I used `Express graphql` for handling the backend queries. I used `postgres` database and used `Sequelize` to model my database.

The database has 5 tables: 

* User (stores the users)
* Product (stores the products)
* Category (stores the categories)
* PurchaseHistory (stores the purchase histories)
* rentHistory (stores the rent histories)

These tables have different relations with each other. look at the `/server/db/db.js` for more information. Here is a visual representation of how these models are related to each other.

![](https://i.ibb.co/bs39Rsr/database-model-relationships.jpg)

### Database Model and relationship Declarations

For model declarations, I used Sequelize because it makes it easier to work with relational database, queries and everything. I defined all the models inside `/server/db/Tables` Directory. Then I imported them in `/server/db/db.js` and defined all the relationships there.

### Defining GraphQL custom output types

I defined 5 different custom output types for our query and mutations.
* Usertype (returns a user object)
* ProductType (returns a product object)
* CategoryType (returns a category object)
* PurchaseHistoryType (returns a purchaseHistory object)
* rentHistoryType (returns a rentHistory object)

### Defining GraphQl Schemas

I defined the GraphQL Schema inside `/server/graphql/schema.js`. There I imported `mutation.js` and `query.js`. And inside the `/server/graphql` directory, there are two different directories for defining all the queries and mutations.

### Database Update and Query

For Database Update and queries, I used Sequelize methods because it makes things easier to work with. here is the [sequelize docs](https://sequelize.org/docs/v6/)


# Client