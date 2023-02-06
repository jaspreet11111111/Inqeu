const nodemailer = require('nodemailer')
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
		host: "sandbox.smtp.mailtrap.io",
		port: 25,
		auth: {
			user: "fd82e4109f5e19",
			pass: "d43a4917459e78"
		}
	});
	return mailSent
}
module.exports = { generateOtp, mailTransport }