var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(result) {
			cb(result);
		});
	},
	insert: function(cols, vals, cb) { // cols and vals must be arrays
		orm.insertOne('burgers', cols, vals, function(result) {
			cb(result);
		});
	},
	update: function(colValsObj, condition, cb) {
		orm.updateOne('burgers', colValsObj, condition, function(result) {
			cb(result);
		});
	}
}

module.exports = burger;