const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;
		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, 'test');
			req.userId = decodedData?.id
		}
		else {
			decodedData = jwt.decode(token);

			req.userId = decodedData?.sub
		}

		next();
	}
	catch (err) {
		console.log(err);
	}
}

exports.protect = async (req, res, next) => {
	let token
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1]

			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			// console.log("hello decoded", decoded);

			req.user = await User.findById(decoded.id);
			// console.log(req.user)

			next()
		} catch (error) {
			console.error(error)
			res.status(401)
			throw new Error('Not authorized, token failed')
		}
	}

	if (!token) {
		res.status(401)
		throw new Error('Not authorized, no token')
	}
}


