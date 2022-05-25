import Sequelize from 'sequelize'

// initializing the database connection

const DB_CONNECTION = new Sequelize(
    'teebay', // table name
    'postgres', // user
    'root', // password
    {
        dialect: 'postgres', // db engine
        host: 'localhost', // host
    }
)
export default DB_CONNECTION;