require('dotenv').config();
const express = require('express');
const index = require('./controller/index');

// Init Express
const app = express();
const port = process.env.PORT || 3000;

// Dependencies/Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', index);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});