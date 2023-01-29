import axios from 'axios';
import { QUERY_CREATE_FAIL, QUERY_CREATE_REQUEST, QUERY_CREATE_SUCCESS } from '../constants/actionType'

export const createQuery = (queryData) => async (dispatch) => {
	try {
		dispatch({
			type: QUERY_CREATE_REQUEST
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post('/api/v1/query', queryData, config)
		dispatch({
			type: QUERY_CREATE_SUCCESS,
			payload: data
		})
	}
	catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		dispatch({
			type: QUERY_CREATE_FAIL,
			error: message
		})
	}
}