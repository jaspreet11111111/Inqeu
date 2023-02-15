const nodemailer = require('nodemailer');
const { google } = require("googleapis");




const generateOtp = () => {
	let otp = '';
	for (let i = 0; i <= 3; i++) {
		const randomVal = Math.round(Math.random() * 9);
		otp = otp + randomVal;
	}
	return otp
}


const mailTransport = () => {
	console.log('Mail sent')
	const mailSent = nodemailer.createTransport({
		service: "gmail",
		host: 'smtp.gmail.com',
		auth: {
			user: 'maheshwariansh720@gmail.com',
			pass: process.env.PASS
		}
	})
	return mailSent
}
module.exports = { generateOtp, mailTransport }