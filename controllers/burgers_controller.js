var express = require('express');

var burgers = require('../models/burger.js');

var router = express.Router();

router.route('/')
	.get(function(req, res) {
		res.render('index', { say: 'Hi' });
	})
	.post(function(req, res) {
		
	})
	.put(function(req, res) {
		
	});

module.exports = router;