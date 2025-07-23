# express-db-app

- create main dir
- npm init -y
- npm i express path dotenv pg

- create:
app.js
db/pool.js
routes/indexRouter.js
controllers/usersController.js

- build basic express server with route to controller

- connect to postgresql
    - render.com
    - new postgesql 
      - name: users_app_db
      - database: leave blank it will auto generate
      - user: leave blank it will auto generate
      - region: frankfurt, EU Central
      - click create database 

- db/pool.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.ENV.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    }
})

- controllers/usersController.js
const pool = require('../db/pool');

exports.getUsers = [
    async (req, res) => {
        console.log("usersController getUsers");
        
        try {
            const result = await pool.query('SELECT NOW()');
            res.json({
                success: true,
                message: 'Connected to DB',
                time: result.rows[0].now,
            })
        }
        catch (error) {
            res.status(500);
            res.json({
                success: false,
                message: "Failed to connect to DB",
                error: error.message
            })
        }

    }
]

- db/testConnection.js
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


- inside .env:
  - copy external database URL from render and paste in .env
  - DATABASE_URL=external_database_url


- run node db/testConnection.js


- seed the database with initial table and values
- touch db/seed.js