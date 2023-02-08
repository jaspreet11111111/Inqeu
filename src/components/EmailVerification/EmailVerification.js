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
	const [formData, setFormData] = useState({
		otp: '',
		userId: ''
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSub = (e) => {
		e.preventDefault();


		dispatch(generateOtp({ ...formData, userId: userInfo.userInfo.user._id, some: 'some', loda: 'jaspreet' }, navigate))

	}


	return (
		<Card sx={{
			width: {
				xs: '95%',
				sm: '95%',
				md: '50%',
				lg: '40%'
			},
			margin: 'auto',
			padding: '2em',
			marginTop: '2em',
			marginBottom: '2em'
		}}>
			<Typography fontSize='24px'>Please verify OTP</Typography>
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
						onChange={e => setFormData({ ...formData, otp: e.target.value })}
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