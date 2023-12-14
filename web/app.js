const express = require('express');
const apiRoutes = require('./server/routes/api.routes');
require('dotenv').config();
require('./server/config/db');

const app = express();
const port = process.env.PORT;

app.use(express.json);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log("Server is running");
}) 