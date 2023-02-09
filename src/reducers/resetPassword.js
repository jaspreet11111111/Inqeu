import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from '../constants/actionType';

const initialState = {
	resetPasswordLoading: false,
	resetPasswordSuccess: false,
	resetPasswordError: '',
};

export const resetPasswordReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_PASSWORD_REQUEST:
			return {
				...state,
				resetPasswordLoading: true,
				resetPasswordSuccess: false,
				resetPasswordError: '',
			};
		case RESET_PASSWORD_SUCCESS:
			return {
				...state,
				resetPasswordLoading: false,
				resetPasswordSuccess: true,
				resetPasswordError: '',
			};
		case RESET_PASSWORD_FAIL:
			return {
				...state,
				resetPasswordLoading: false,
				resetPasswordSuccess: false,
				resetPasswordError: action.payload,
			};
		default:
			return state;
	}
};
