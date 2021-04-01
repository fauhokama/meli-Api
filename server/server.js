require('dotenv').config();
const express = require('express');
const routes = require('./controller/routes');

// Init Express
const app = express();
const port = process.env.PORT || 3000;

// Dependencies/Middleware
app.use('/', routes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});