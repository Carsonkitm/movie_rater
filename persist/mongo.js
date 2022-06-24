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


function setUpConnectionHandlers (callback){
    db.once('connecting', () => {
        console.log('Conncting to MongoDB')
    });

    db.once('connected', () => {
        console.log('Conncted to MongoDB')
    });

    db.once('open', () => {
        console.log('Open connection to Mongodb')
    });

    db.once('error', (err) => {
        console.log('ERROR Connecting to MongoDB', err)
    });
}

module.exports = {
    connection: connection,
    setUpConnectionHandlers: setUpConnectionHandlers
}