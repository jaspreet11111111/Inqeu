const express = require('express');
const router = express.Router();
const { signup, signin, updateUser, deleteUser, updateUserProfile, getUserProfile, forgotPassword, resetPassword, verifyEmail, getAllUsers, adminSignin, } = require('../controllers/userController');
const { protect } = require('../middleware/auth')
router
	.route('/')
	.get(getAllUsers)

router
	.post('/signin', signin)
	.post('/signup', signup)

router
	.get('/forgotPassword',)
	.post('/forgotPassword', forgotPassword)
	.post('/resetPassword', resetPassword)

router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile)

router
	.route('/:id')
	.delete(protect, deleteUser)
	.put(protect, updateUser)

router
	.route('/verify-email')
	.post(verifyEmail)

module.exports = router