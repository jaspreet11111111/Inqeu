import { QUERY_CREATE_FAIL, QUERY_CREATE_REQUEST, QUERY_CREATE_SUCCESS } from "../constants/actionType";

export const createQueryReducer = (state = { queries: [] }, action) => {
	switch (action.type) {
		case QUERY_CREATE_REQUEST:
			return { loading: true, queries: [] }

		case QUERY_CREATE_SUCCESS:
			return { loading: false, queries: action.payload }

		case QUERY_CREATE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}