import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

const RentHistory = DB_CONNECTION.define('rentHistory', {
    from: {
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'From Date should be specified'
        }
    },
    to: {
        type: Sequelize.STRING,
        allowNull: {
            args: false,
            msg: 'To Date should be specified'
        }
    },
});

export default RentHistory