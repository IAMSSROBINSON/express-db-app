const pool = require('./pool');
require('dotenv').config();


exports.getAllUsers = async function () {
    try {
        const { rows } = await pool.query('SELECT * FROM usernames');
        console.log("All users:", rows);
        return rows;
    }
    catch (error) {
        console.log("Could not get data.");
        return [];
    }
}