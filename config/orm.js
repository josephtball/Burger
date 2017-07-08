var connection = require('./connection.js');


var commands = {
	selectAll: function() {
		var query = 'SELECT * FROM burgers';
		connection.query(query, function(err, res) {
			if (err) throw err;
			return res;
		});
	},
	insertOne: function(newBurger) {
		var query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?,?)';
		connection.query(query, [ newBurger, false ], function(err, res) {
			if (err) throw err;
			return res;
		});
	},
	updateOne: function(id) {
		var query = 'UPDATE burgers SET devoured = ? WHERE id = ?';
		connection.query(query, [ true, id ]function(err, res) {
			if (err) throw err;
			return res;
		});
	}
};

module.exports = commands;