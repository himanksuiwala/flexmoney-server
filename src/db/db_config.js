const mongoose = require("mongoose");

mongoose.connect(process.env.URI);

const db_connection = mongoose.connection;

module.exports = db_connection;