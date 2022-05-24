import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

const RentHistory = DB_CONNECTION.define('rentHistory', {
    productId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'productId has to be set'
        }
    },
    renterId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'buyerId has to be set',
        }
    },
    borrowerId: {
        type: Sequelize.INTEGER,
        allowNull: {
            args: false,
            msg: 'sellerId has to be set'
        }
    },
    from: {
        type: Sequelize.DATE,
        allowNull: {
            args: false,
            msg: 'From Date should be specified'
        }
    },

    to: {
        type: Sequelize.DATE,
        allowNull: {
            args: false,
            msg: 'To Date should be specified'
        }
    },

});

export default RentHistory