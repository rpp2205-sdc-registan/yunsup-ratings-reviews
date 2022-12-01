const Promise = require("bluebird");

module.exports = (db) => {
	if (!db.queryAsync) {
		db = Promise.promisifyAll(db);
	}
	return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS review (
        id INTEGER NOT NULL PRIMARY KEY,
        product_id INTEGER NOT NULL,
        rating INTEGER,
        date BIGINT,
        summary MEDIUMTEXT,
        body MEDIUMTEXT,
        recommend VARCHAR,
        reported VARCHAR,
        reviewer_name VARCHAR,
        reviewer_email VARCHAR,
        response MEDIUMTEXT,
        helpfulness INTEGER,
    ) COMMENT 'CREATE review table`);
};

// CREATE TABLE IF NOT EXISTS photo (
//   id INTEGER NOT NULL PRIMARY KEY,
//   review_id INTEGER,
//   url MEDIUMTEXT,
// ) COMMENT 'CREATE photo table'
