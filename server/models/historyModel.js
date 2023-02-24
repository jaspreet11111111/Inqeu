const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	action: {
		type: String,
		enum: ['liked', 'added'],
		required: true
	},
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	},
	message: {
		type: String
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
});

const History = mongoose.model('History', historySchema);

module.exports = History;
