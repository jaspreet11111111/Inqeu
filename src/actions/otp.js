import { USER_OTP_FAIL, USER_OTP_SUCCESS, USER_OTP_REQUEST, USER_LOGOUT } from "../constants/actionType";
import axios from "axios";

export const generateOtp = (formData, navigate) => async (dispatch) => {
	try {
		dispatch({
			type: USER_OTP_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post('/api/v1/user/verify-email', formData, config);
		console.log("actionwalalOTP", data)

		dispatch({
			type: USER_OTP_SUCCESS,
			payload: data,
		});

		localStorage.setItem('profile', JSON.stringify(data.user));
		navigate('/');
	} catch (error) {
		dispatch({
			type: USER_OTP_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}