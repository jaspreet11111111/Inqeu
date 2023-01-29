const Query = require('../models/queryModel');
exports.postQuery = async (req, res) => {
	try {
		const query = new Query({
			name: req.body.name,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber,
			message: req.body.message
		})

		const newQuery = await query.save();
		res.status(201).json({
			status: 'success',
			newQuery
		})
	}
	catch (err) {
		res.status(400).json({
			status: 'fail',
			message: 'Error occured'
		})
		console.log(err);
	}
}
