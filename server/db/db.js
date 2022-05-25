import DB_CONNECTION from './connection.js';
import User from './Tables/User.js';
import Product from './Tables/Product.js';
import Category from './Tables/Category.js';
import PurchaseHistory from "./Tables/PurchaseHistory.js";
import RentHistory from "./Tables/RentHistory.js";
// database relations

// a user can make multiple products but every product belongs to only one user
User.hasMany(Product);
Product.belongsTo(User);

// a user can have many purchase histories but a purchase history belongs to only one user
User.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(User);

Product.hasOne(PurchaseHistory);
PurchaseHistory.belongsTo(Product);

// a user can have many rent histories but a rent history belongs to only one user
User.hasMany(RentHistory);
RentHistory.belongsTo(User);

// a product can have many rent histories but a rent history belongs to only one product
Product.hasMany(RentHistory);
RentHistory.belongsTo(User);

// a product can have many categories and a category can also have many products
Product.belongsToMany(Category, {through: 'CategoryProduct'});
Category.belongsToMany(Product, {through: 'CategoryProduct'});

// await DB_CONNECTION.sync({ force: true });

DB_CONNECTION.sync(); // syncs the database for the first time.


export default DB_CONNECTION