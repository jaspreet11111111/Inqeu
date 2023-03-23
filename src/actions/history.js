import axios from "axios";

export const listHistory = () => async (dispatch) => {
	try {
		dispatch({ type: 'FETCH_HISTORY_REQUEST' })

		const { data } = await axios.get(`/api/v1/history`);
		// console.log(data)

		dispatch({
			type: 'FETCH_HISTORY_SUCCESS',
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: 'FETCH_HISTORY_FAILURE',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const addHistory = (historyData) => async (dispatch) => {
	try {
		dispatch({ type: 'ADD_HISTORY_REQUEST' })
		const { data } = await axios.post(`/api/v1/history/added`, historyData)
		// console.log(historyData)
		dispatch({
			type: 'ADD_HISTORY_SUCCESS',
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: 'ADD_HISTORY_FAILURE',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const addLikeHistory = (historyData) => async (dispatch) => {
	try {
		dispatch({ type: 'ADD_HISTORY_REQUEST' })
		const { data } = await axios.post(`/api/v1/history/liked`, historyData)
		// console.log(historyData)
		dispatch({
			type: 'ADD_HISTORY_SUCCESS',
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: 'ADD_HISTORY_FAILURE',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
