import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

const PurchaseHistory = DB_CONNECTION.define('purchaseHistory', {
    productId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'productId has to be set'
        }
    },
    buyerId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'buyerId has to be set',
        }
    },
    sellerId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'sellerId has to be set'
        }
    }
});

export default PurchaseHistory