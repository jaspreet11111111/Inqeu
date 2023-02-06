import { Button, InputBase, Typography, Stack, Card } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { generateOtp } from '../../actions/otp'
import { USER_OTP_SUCCESS } from '../../constants/actionType';

const EmailVerification = () => {
	const userInfo = useSelector(state => state.userRegister);
	console.log("userOTP:", userInfo);

	const userOTP = useSelector(state => state.otpGen);
	console.log(userOTP)
	const [formData, setFormData] = useState({
		otp: '',
		userId: userInfo.user._id
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSub = (e) => {
		e.preventDefault();
		console.log('success otp')

		dispatch(generateOtp())
		console.log('success otp');
		console.log('otpForm:', formData)
	}

	return (
		<Card>
			<Typography>Please verify OTP</Typography>
			<form onSubmit={handleSub}>
				<Stack
					bgcolor="#ffff"
					direction="row"
					border="1px solid rgba(0, 0, 0, 0.12)"
					sx={{
						width: '100%',
						height: '48px',
						borderRadius: '10px',
						marginBottom: '24px'
					}}>
					{/* <PersonIcon sx={{
						color: '#880ED4',
						padding: '12px 20px'
					}} /> */}
					<InputBase
						placeholder='Username'
						name='username'
						onChange={e => setFormData({ ...formData, otp: e.target.value, userId: userInfo?.user._id })}
						autoFocus={true}
						fullWidth
						required={true}
						aria-label='Username'
					/>
				</Stack>
				<Button type='submit'>Submit</Button>
			</form>
		</Card>
	)
}

export default EmailVerification