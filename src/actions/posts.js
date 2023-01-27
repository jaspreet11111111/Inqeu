import { fetchPostsApi, createPostApi } from '../api/index'
import axios from 'axios';
import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS } from '../constants/actionType';
import { logout } from './userAction';
export const getPosts = () => async (dispatch) => {
	const action = { type: 'FETCHALL', payload: [] }
	try {
		const { data } = await fetchPostsApi();
		dispatch({ type: 'FETCHALL', payload: data })
		console.log(data)
	}
	catch (err) {
		console.log(err);
	}
	dispatch(action);
}

export const createPost = (postData) => async (dispatch, getState) => {
	try {
		dispatch({
			type: POST_CREATE_REQUEST,
		})

		const {
			userLogin: { userInfo }
		} = getState()

		console.log("postactionwala:", userInfo)

		const config = {
			headers: {
				Authorization: `Bearer ${ userInfo.token }`,
			},
		}

		const { data } = await axios.post(`/api/v1/posts`, postData, config);
		console.log("postWalaData:", data)

		dispatch({
			type: POST_CREATE_SUCCESS,
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
			type: POST_CREATE_FAIL,
			payload: message,
		})
		console.log(error)
	}
}

export const listPosts = () => async (
	dispatch
) => {
	try {
		dispatch({ type: POST_LIST_REQUEST })

		const { data } = await axios.get(
			`/api/v1/posts`
		)

		dispatch({
			type: POST_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: POST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}