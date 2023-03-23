const initialState = {
	loading: false,
	activity: [],
	error: ''
};

const historyReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_HISTORY_REQUEST':
			return {
				...state,
				loading: true
			};
		case 'FETCH_HISTORY_SUCCESS':
			// console.log(action.payload)
			return {
				loading: false,
				activity: action.payload,
			};
		case 'FETCH_HISTORY_FAILURE':
			return {
				loading: false,
				activity: [],
				error: action.payload
			};
		case 'ADD_HISTORY_REQUEST':
			return {
				...state,
				loading: true
			};
		case 'ADD_HISTORY_SUCCESS':
			return {
				loading: false,
				activity: [...state.activity, action.payload],
			};
		case 'ADD_HISTORY_FAILURE':
			return {
				loading: false,
				activity: [],
				error: action.payload
			};
		default:
			return state;
	}
};

export default historyReducer;
