import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

// purchaseHistory doesn't contain any personal fields. it'll only store the relational ids
// see db.js for more information
const PurchaseHistory = DB_CONNECTION.define('purchaseHistory', {

});

export default PurchaseHistory