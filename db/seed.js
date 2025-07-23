const pool = require('./pool');
require('dotenv').config();

async function seed() {

    try {
        await pool.query(
            `
            DROP TABLE IF EXISTS usernames;
            CREATE TABLE usernames (
                id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                username VARCHAR (255)
            );
            `
        );

        await pool.query(`
            INSERT INTO usernames (username)
            VALUES ('Socrates'), ('Plato'), ('Aristotle'), ('Seneca')
            `);
        console.log('Database seeded successfully.');
        process.exit();
    }   
    catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seed();