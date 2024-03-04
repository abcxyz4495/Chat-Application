const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = (url, dbName) =>
	mongoose
		.connect(url, { dbName })
		.then((res) => console.log(`Connected to DB at ${res.connection.host}`))
		.catch((err) => console.error(err.message));

module.exports = connectDB;
