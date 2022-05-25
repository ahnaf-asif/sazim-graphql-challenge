import Sequelize from "sequelize";
import DB_CONNECTION from "../connection.js";

// this is the user model
const User = DB_CONNECTION.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'The email is already in use'
        },
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'The phone number is already in use'
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User