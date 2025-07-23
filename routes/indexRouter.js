const { Router } = require('express');

console.log("IndexRouter");

const indexRouter = Router();
const { getUsers } = require('../controllers/usersController');

indexRouter.get('/', getUsers);


module.exports = indexRouter;