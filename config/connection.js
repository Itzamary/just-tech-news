//import the sequelize constructor from the library
const Sequelize = require('sequelize');
let sequelize; 
// load the dotenv
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to out database, pass in your mysql information for username and password
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
});
}




module.exports = sequelize;

