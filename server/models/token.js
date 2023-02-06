const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const tokenSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	token: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		expires: 3600,
		default: Date.now()
	}
});

tokenSchema.pre('save', async function(next) {
	// only run this function if passwprd is modified
	if (this.isModified('token')) {
		const hash = await bcrypt.hash(this.token, 12);
		this.token = hash
	}
	next();

})

tokenSchema.methods.compareToken = async function(
	token
) {
	return await bcrypt.compare(token, this.token);
};

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;