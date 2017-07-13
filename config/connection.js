var mysql = require('mysql');

var connection;

if (proccess.env.JAWSDB_URL) {
	connection = mysql.createConnection(proccess.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'Keyport1',
		database: 'burgers_db'
	});
}

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;