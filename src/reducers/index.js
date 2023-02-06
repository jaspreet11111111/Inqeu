import { combineReducers } from 'redux';
import { postCreateReducer, postListReducer } from './post';
import auth, { userLoginReducer, userRegisterReducer } from './auth';
import { userDetailsReducer, userUpdateProfileReducer } from './userReducer'
import { userOTPReducer } from './otp';
export default combineReducers({
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    auth: { userDetailsReducer, userLoginReducer },
    userLogin: userLoginReducer,
    postList: postListReducer,
    postCreated: postCreateReducer,
    otpGen: userOTPReducer
})