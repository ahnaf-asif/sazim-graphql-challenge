import DB_CONNECTION from './connection.js';
import User from './Tables/User.js';
import Product from './Tables/Product.js';
import Category from './Tables/Category.js';
import PurchaseHistory from "./Tables/PurchaseHistory.js";
import RentHistory from "./Tables/RentHistory.js";

// database relations

// a user can make multiple products but every product will belong to only one user
User.hasMany(Product);
Product.belongsTo(User);

// a product can have many categories and a category can also have many posts
Product.belongsToMany(Category, {through: 'CategoryProduct'});
Category.belongsToMany(Product, {through: 'CategoryProduct'});

// await DB_CONNECTION.sync({ force: true });

try {
    await DB_CONNECTION.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default DB_CONNECTION