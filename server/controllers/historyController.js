const History = require("../models/historyModel");

const userHistory = async (req, res) => {
	try {
		const history = await History.find();
		res.status(200).json({
			history
		})
	}
	catch (error) {
		console.log(error)
		res.status(500).json({
			message: 'Fail to load history'
		})
	}
}

const postLikedHistory = async (req, res) => {
	const { userId, postId } = req.body
	try {
		const newHistory = new History({
			userId,
			action: 'liked',
			postId
		});
		await newHistory.save();
		res.status(201).send(newHistory);
	} catch (error) {
		console.error(error);
		res.status(500).send({ error: 'Error adding history' });
	}
}

const postAddedHistory = async (req, res) => {
	const { message, userId, postId } = req.body
	try {
		const newHistory = new History({
			userId,
			action: 'added',
			postId,
			message: message
		});
		await newHistory.save();
		res.status(201).send(newHistory);
	} catch (error) {
		console.error(error);
		res.status(500).send({ error: 'Error adding history' });
	}
}

module.exports = {
	userHistory,
	postAddedHistory,
	postLikedHistory
}