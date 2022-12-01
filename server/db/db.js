require("dotenv").config({ path: `${__dirname}.env` });
const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });
db.connectAsync()
	.then(() =>
		db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`),
	)
	.then(() =>
		console.log(
			`Connected to MySQL ${process.env.DB_NAME} as id: ${db.threadId}`,
		),
	)
	.then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
	.catch((err) => console.log(err));

module.exports = db;
