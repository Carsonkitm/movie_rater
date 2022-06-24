// pulling in mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;

function connection (name, pw, host, port, db) {
    const connectionString = ``;

    mongoose.connection(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
