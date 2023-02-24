const express = require('express');
const { userHistory, postLikedHistory, postAddedHistory } = require('../controllers/historyController');
const router = express.Router();


router
	.get('/', userHistory)

router
	.post('/liked', postLikedHistory)

router
	.post('/added', postAddedHistory)

module.exports = router