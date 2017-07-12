var express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
	burger.all(function(data) {
		var hbsObj = {
			burger: data
		};
		res.render('index', hbsObj);
	});
});
router.post('/', function(req, res) {
	burger.insert(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function() {
		res.redirect('/');
	});
});

router.put('/:id', function(req, res) {
	var condition = 'id = '+req.params.id;
	burger.update({ devoured: req.body.devoured }, condition, function() {
		res.redirect('/');
	});
});

module.exports = router;