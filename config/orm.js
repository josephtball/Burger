var connection = require('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objectToSql(object) {
	var arr = [];
	for (var key in object) {
		var value = object[key];
		if (Object.hasOwnProperty.call(object, key)) {
			if (typeof value === 'string' && value.indexOf(' ') >= 0) {
				value = '"' + value + '"';
			}
			arr.push(key + '=' + value);
		}
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

		var queryString = 'INSERT INTO ' + table + ' (' + cols + ') VALUES (' + questionMarks + ');';
		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, colValsObj, condition, cb) {
		var colValsSql = objectToSql(colValsObj);

		var queryString = 'UPDATE '+table+' SET '+colValsSql+' WHERE '+condition+';';
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;