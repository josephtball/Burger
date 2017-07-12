var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) { // cols and vals must be arrays
		cols = cols.toString();
		var questionMarks = printQuestionMarks(vals.length);

		var queryString = 'INSERT INTO ' + table + ' (' + cols + ') VALUES (' + questionMarks + ')';
		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(id) {
		var query = 'UPDATE burgers SET devoured = ? WHERE id = ?';
		connection.query(query, [ true, id ], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;