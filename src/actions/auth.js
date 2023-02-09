import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAIL, RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from "../constants/actionType";

export const signin = (formData, navigate) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		})
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post('/api/v1/user/signin', formData, config)
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		})
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})
		localStorage.setItem('profile', JSON.stringify(data));
		localStorage.setItem('token', data.token)
		navigate('/');
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
export const signup = (formData, navigate) => async (dispatch) => {
	console.log('Hello2')
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		})
		console.log('Hello')
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const { data } = await axios.post('/api/v1/user/signup', formData, config);
		console.log("authwalSignup", data)
		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		})
		console.log(data)
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})
		navigate('/verify');
	} catch (error) {
		console.log(error)
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
export const resetPassword = (email, newPassword, resetPasswordToken, navigate) => {
	return (dispatch) => {
		dispatch({ type: RESET_PASSWORD_REQUEST });
		axios
			.post('/api/reset-password', {
				email,
				newPassword,
				resetPasswordToken,
			})
			.then((response) => {
				dispatch({
					type: RESET_PASSWORD_SUCCESS,
					payload: response.data,
				});
				navigate('/signin')
			})
			.catch((error) => {
				dispatch({
					type: RESET_PASSWORD_FAILURE,
					payload: error.message,
				});
			});
	};
};