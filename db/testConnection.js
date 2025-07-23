const pool = require('../db/pool');
require('dotenv').config();


async function testConnection () {
    try {
        result = await pool.query('SELECT NOW()');
        console.log("Connected to DB", result.rows[0].now);
        process.exit();
    }
    catch (error) {
        console.log("Could not connect to DB");
        console.log(error.message);
        process.exit(1);
    }
}
testConnection();