const express = require('express');
const cores = require('cors');
const apiRoutes = require('./server/routes/api.routes');
require('dotenv').config();
require('./server/config/db');

const app = express();

const port = process.env.PORT;
app.use(cores());
app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log("Server is running");
}) 