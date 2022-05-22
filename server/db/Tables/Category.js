import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

const Category = DB_CONNECTION.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'Category name cannot be null'
        }
    },
})


export default Category