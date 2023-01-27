import { signIn, signUp } from "../api";
import axios from "axios";
import { AUTH, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/actionType";

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
		localStorage.setItem('profile', JSON.stringify(data))
		navigate('/');
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
export const signup = (formData, navigate) => async (dispatch) => {
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		})

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

		localStorage.setItem('profile', JSON.stringify(data));
		navigate('/');
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}