import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

const Category = DB_CONNECTION.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
})


export default Category