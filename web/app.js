const express = require('express');
const app = express();
const apiRoutes = require('./server/routes/api.routes');

const port = 3000;

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log("Server is running");
})