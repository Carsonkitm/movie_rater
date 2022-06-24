// pulling in mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;

function connection (name, pw, host, port, db) {
    const connectionString = `mongodb+srv://carsonkit:Posivibesonly1224@cluster0.hcczi.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connection(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
