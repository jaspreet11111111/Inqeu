import { Paper, Grid, Card, Stack, Typography, InputBase, Checkbox, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { GoogleLogin } from "react-google-login"
import { LinkedIn } from 'react-linkedin-login-oauth2';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SignInImage from "../assets/images/Layer 2.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignupCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [IsSignUp, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const userRegister = useSelector(state => state.userRegister)
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userRegister;
  const loginError = userLogin.error;
  console.log(error || loginError)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    if (error || loginError) {
      toast.error(error || loginError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
    else {
      if ({ IsSignUp } ? (formData.email && formData.password && formData.username && formData.confirmPassword) : (formData.email && formData.password)) {
        toast.success("OTP sent to your email id", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        dispatch(signup(formData, navigate));

      }
      else {
        toast.error('Provide valid information', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
      if (!IsSignUp) {
        toast.success("Login successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        dispatch(signin(formData, navigate));
      }

    }


  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const switchMode = () => {
    setIsSignup(!IsSignUp);
  }

  const googleSuccess = async (res) => {
    const user = await res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: 'AUTH', data: { user, token } });
      navigate('/')
    }
    catch (err) {
      console.log(err)
    }
  }
  const googleFailure = (err) => {
    console.log(err)
    console.log("Google sign in was unsuccessfull")
  }
  return (
    <Grid container className='signIn_container'>
      <Grid item xs={12} md={6} lg={6}>
        <Card
          className='sigin_card'
          sx={{
            padding: {
              xs: '2em 1em',
              sm: '2em 1em',
              md: '1em 4em',
              lg: '3em 9em'
            }
          }}>
          <Stack className='signinCard_stack'>
            <Typography color='#414141' variant='p' fontSize='20px' fontWeight='700' marginBottom='32px'>
              {!IsSignUp ? 'Sign In' : 'Sign Up'}
            </Typography>
            <form onSubmit={handleSubmit}>
              {IsSignUp && (
                <Stack
                  bgcolor="#ffff"
                  direction="row"
                  border="1px solid rgba(0, 0, 0, 0.12)"
                  sx={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '10px',
                    marginBottom: '24px'
                  }}>
                  <PersonIcon sx={{
                    color: '#880ED4',
                    padding: '12px 20px'
                  }} />
                  <InputBase
                    placeholder='Username'
                    name='username'
                    onChange={e => handleChange(e)}
                    autoFocus={true}
                    fullWidth
                    required={true}
                    aria-label='Username' />
                </Stack>
              )}

              <Stack
                bgcolor="#ffff"
                direction="row"
                border="1px solid rgba(0, 0, 0, 0.12)"
                sx={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '10px',
                  marginBottom: '24px'
                }}>
                <MailIcon sx={{
                  color: '#880ED4',
                  padding: '12px 20px'
                }} />
                <InputBase
                  placeholder='Email'
                  name='email'
                  onChange={e => handleChange(e)}
                  autoFocus={true}
                  fullWidth
                  required={true} />
              </Stack>
              <Stack
                bgcolor="#ffff"
                direction="row"
                alignItems
                border="1px solid rgba(0, 0, 0, 0.12)"
                sx={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '10px'
                }}>
                <VpnKeyIcon sx={{
                  color: '#880ED4',
                  padding: '12px 20px'
                }} />
                <InputBase
                  placeholder='Password'
                  fullWidth
                  onChange={e => handleChange(e)}
                  name='password'
                  type={showPassword ? 'text' : 'password'} />
                <Button onClick={handleShowPassword}>
                  {showPassword ? <VisibilityOffIcon sx={{
                    color: 'rgba(0, 0, 0, 0.12)'
                  }} /> : <VisibilityIcon sx={{
                    color: 'rgba(0, 0, 0, 0.12)'
                  }}
                  />}
                </Button>
              </Stack>
              <Typography fontSize='12px' color='red' textAlign='left'>
                {formData.password.length < 8 ? 'Password must have 8 charecters' : ''}
              </Typography>
              {IsSignUp && (
                <>

                  <Stack
                    bgcolor="#ffff"
                    direction="row"
                    alignItems
                    border="1px solid rgba(0, 0, 0, 0.12)"
                    sx={{
                      width: '100%',
                      height: '48px',
                      borderRadius: '10px',
                      marginTop: '24px'
                    }}>
                    <VpnKeyIcon sx={{
                      color: '#880ED4',
                      padding: '12px 20px'
                    }} />
                    <InputBase
                      placeholder='Re-enter Password'
                      fullWidth
                      onChange={handleChange}
                      type={showPassword ? 'text' : 'password'}
                      name='confirmPassword' />
                  </Stack>
                  <Typography fontSize='12px' color='red' textAlign='left'>
                    {(formData.password !== formData.confirmPassword) ? 'Password must be same' : ''}
                  </Typography>
                </>
              )}
              <Stack
                direction='row'
                justifyContent='space-between'
                marginTop='8px'
              >
                <Box className='checkbox_container'>
                  <input type='checkbox' placeholder='Keep me sign in' />
                  Keep me sign in
                </Box>
                <Link className='forgot_link' to='/resetPassword'>
                  Forgot Password ?
                </Link>
              </Stack>
              <Button variant='contained' className='loginBtn' sx={{
                backgroundColor: '#880ED4',
                textTransform: 'initial',
                borderRadius: '10px',
                marginTop: '24px'
              }}
                type='submit'
                onClick={handleSubmit}>
                Sign up
              </Button>
              <ToastContainer />
            </form>
            <Typography
              fontSize='20px'
              color='#414141'
              fontWeight='400'
              margin='32px 0'
            >
              OR
            </Typography>
            <Stack className='otherSigninOption_container'>
              <GoogleLogin
                // clientId={clientId}
                render={(renderProps) => (
                  <Button className='signin_option' sx={{
                    color: 'black',
                    textTransform: 'initial'
                  }} onClick={renderProps.onClick}>
                    <GoogleIcon sx={{
                      color: '#414141',
                      marginRight: '10px'
                    }} />
                    Signin with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin' />
              <Box className='signin_option'>
                {/* <LinkedIn
                  clientId="YOUR_CLIENT_ID"
                  onFailure={error => console.log(error)}
                  onSuccess={data => console.log(data)}
                  redirectUri={`http://localhost:3000`}
                  scope="r_liteprofile r_emailaddress"
                  renderElement={({ onClick, disabled }) => (
                    <Button onClick={onClick} disabled={disabled}>
                      <LinkedInIcon sx={{
                        color: '#414141',
                        marginRight: '10px'
                      }} />
                      Signin with LinkedIn
                    </Button>
                  )}
                /> */}
              </Box>
            </Stack>
            <Link className='newAccount_link' onClick={switchMode}>
              <Typography color='black' fontFamily='Poppins'>
                {!IsSignUp ? 'Create new account' : 'Already have an account? '}
              </Typography>
              <Typography color='#880ED4' fontFamily='Poppins'>{
                !IsSignUp ? 'New?' : 'Login'
              }</Typography>
            </Link>
          </Stack>
        </Card>
      </Grid>
      <Grid item lg={6} md={6} className='authCoverImage_container' >
        <Stack spacing={2}>
          <img src={SignInImage} className='auth_coverImage' />
          <Typography fontSize='21px' fontWeight='600' textAlign='center' >
            Doing greater to mankind
          </Typography>
          <Stack direction='row' alignItems='center' spacing='24px'
          >
            <Typography
              variant='p'
              fontSize='21px'
              fontWeight='700'
              color='#414141' >
              Join
            </Typography>
            <Typography
              variant='p'
              fontWeight='700'
              color='#880ED4'
              sx={{
                fontSize: {
                  xs: '32px',
                  sm: '36px',
                  md: '42px',
                  lg: '42px'
                }
              }}>
              Inqeu.com
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>


  )
}

export default SignupCard