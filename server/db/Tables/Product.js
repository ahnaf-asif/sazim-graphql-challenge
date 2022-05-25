import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js"; // getting the db_connection

// this is the product model

const Product = DB_CONNECTION.define('product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    rent: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    rentPaymentPeriod: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'active'
    }
})

export default Product