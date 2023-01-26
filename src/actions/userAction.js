import axios from 'axios'
import {
	USER_DETAILS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_LOGOUT,
	USER_DETAILS_RESET,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_FAIL,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_REQUEST,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_LOGIN_SUCCESS,
	USER_UPDATE_PROFILE_REQUEST

} from '../constants/actionType'

export const logout = () => (dispatch) => {
	localStorage.removeItem('profile')
	dispatch({ type: USER_LOGOUT })
	document.location.href = '/login'
}
export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DETAILS_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		console.log("authwalasuer:", userInfo.token)

		const config = {
			headers: {
				'Content-Type': 'text/plain; charset=ISO-8859-1',
				Authorization: `Bearer ${ userInfo.token }`,
			},
		}

		const { data } = await axios.get(`http://localhost:8000/api/v1/user/${ id }`, config);
		console.log(data)

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: message,
		})
	}
}

export const deleteUser = (id, navigate) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_DELETE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${ userInfo.token }`,
			},
		}

		await axios.delete(`http://localhost:8000/api/v1/user/${ id }`, config)

		dispatch({ type: USER_DELETE_SUCCESS })

		navigate('/auth')
	} catch (error) {
		console.log(error)
	}
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_PROFILE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ userInfo.token }`,
			},
		}

		const { data } = await axios.put(`http://localhost:8000/api/v1/user/profile`, user, config)

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		})
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		})
		localStorage.setItem('userInfo', JSON.stringify(data))
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload: message,
		})
	}
}

export const updateUser = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_UPDATE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${ userInfo.token }`,
			},
		}

		const { data } = await axios.put(`/ api / v1 / user / ${ user._id }`, user, config)

		dispatch({ type: USER_UPDATE_SUCCESS })

		dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

		dispatch({ type: USER_DETAILS_RESET })
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: USER_UPDATE_FAIL,
			payload: message,
		})
	}
}