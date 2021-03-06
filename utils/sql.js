const config = require("../config");
const sql = require('mysql');

const connect = sql.createPool({
    connectionLimit: 10,
    host: config.host,
    user: config.uname,
    password: config.pword,
    database: config.database
});

module.exports = connect;