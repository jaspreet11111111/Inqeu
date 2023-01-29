const express = require('express');
const { postQuery } = require('../controllers/queryController');
const router = express.Router();

router
	.route('/')
	.post(postQuery)

module.exports = router