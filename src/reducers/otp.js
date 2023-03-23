import { USER_OTP_FAIL, USER_OTP_SUCCESS, USER_OTP_REQUEST, USER_LOGOUT } from "../constants/actionType";

export const userOTPReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_OTP_REQUEST:
			return { loading: true }
		case USER_OTP_SUCCESS:
			// console.log(action.payload)
			return { loading: false, otp: action.payload }
		case USER_OTP_FAIL:
			return { loading: false, error: action.payload }
		case USER_LOGOUT:
			return {}
		default:
			return state
	}
}