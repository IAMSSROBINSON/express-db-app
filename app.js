const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const path = require('path');

const indexRouter = require('./routes/indexRouter');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log("METHOD: ", req.method);
    console.log("URL: ", req.url);
    next();
})

app.use('/', indexRouter);



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}..`);
})