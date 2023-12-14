const mongose = require('mongoose');
const mongodbUrl = process.env.mongoDBUrl;

mongose.connect(mongodbUrl);
mongose.connection.on('connected', () => {
    console.log("Connected");
})

mongose.connection.on('error', (err) => {
    console.log(err);
})