const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: Number,
		// required: true,
		maxLength: 10,
		minLength: 10
	},
	message: {
		type: String,
		required: true
	}
})

const Query = mongoose.model('Query', querySchema);
module.exports = Query