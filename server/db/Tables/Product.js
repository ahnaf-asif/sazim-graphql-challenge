import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

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
    }
})

export default Product