const pool = require('../db/pool');
const { getAllUsers } = require('../db/queries');

exports.getUsers = [
    async (req, res) => {
        console.log("usersController getUsers");

        try {
            res.json({
                success: true,
                message: 'Connected to DB',
                data: await getAllUsers(),
            })
        }
        catch (error) {
            res.status(500);
            res.json({
                success: false,
                message: "Database error",
                error: error.message
            })
        }

    }
]