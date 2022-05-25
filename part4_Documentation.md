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

I used react in the client with apollo client. I cached everything so that there is no unnecessary fetch requests. I kept all the graphql related query and mutations separate from the react code.

* I kept all the graphql queries inside `/src/graphql/queries` folder
* I kept all the graphql mutations inside `/src/graphql/mutations` folder
* I kept all the cache handling functions inside `/src/graphql/cacheHandlers` folder.

### User Registration

For registration, I kept it very simple. I created a graphQl Mutation named `REGISTER_USER` which takes all the register data and creates a new user and then returns that user. I then used that user data to login the user.

### Login 

For login, I kept it very simple just for the sake of this challenge. I created a graphQl Mutation named `LOGIN_USER` where you can give email and password as parameters and the server will respond with an User object if the user exists. Then I kept the user data in localStorage and crated an auth context to use throughout the app. This method is not secure for the real world but I think it is good enough for this challenge.

### Logout
For Logout, I just cleared the localStorage `'auth'` variable and redirected user to the home page.

### Add/Edit/Delete Product

After Logging in, user will be able to access /sack/ route from the navigation bar and inside that route there are 5 sections: 
* My products
* Bought Products
* Sold Products
* Borrowed Products
* Lent Products

Inside the `My Products` tab, user will be able to access a "Create Product" button and then will be able to create products. If a user created a product, he/she will be able to access "edit/delete" options at the top-right corner of the preview or view product components. If a person buys a products, his Bought products tab will automatically update.

### Caching and updating the Cache values

When a product is created, I run `updateCacheAfterCreatedProduct()` function located at `src/graphql/cacheHandlers/` folder. same goes for update, delete, buy, rent etc. After create/update/delete, instead of fetching all data from the server, I edited the existing caches to minimize http requests.

# Handling some corner cases

### Rent product

Everytime a user tries to rent a product, I looped through all the existing rentHistory of that product to see if the time segment overlaps with another rent period. I used the idea of over-lapping segment ideas to solve that problem.

### Sold product

If a product is already bought by someone, I marked it as "sold" and no one can buy or rent a sold product


# Limitations

* The website is not secure at all. The password is not stored in a secured way. Usually server doesn't send raw user data to the client and client doesn't store that in localStorage. Server sends a cookie or token and client stores it and uses it for future requests. However, since it was explicitely mentioned in the challenge doc that it's not necessary, hopefully It's all good.


* This is my first time working with react apollo client and postgresql with nodejs. I usually use mongoDB if I need to use nodejs. I also use vueJS most of the time, so it was a challenge shifting from my comfort zone and learning all these new technologies (especially apollo client and in-memory caching).
