import { AUTH, LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from '../constants/actionType';

const initialState = {
  isAuthenticated: false,
  user: {}
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      // console.log(action.payload);
      return { ...state, user: action.payload, isAuthenticated: true }

    case LOGOUT:
      localStorage.clear();
      return { ...state, isAuthenticated: false, user: {} }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      // console.log(action.payload)
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      // console.log(action.payload)
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default authReducer