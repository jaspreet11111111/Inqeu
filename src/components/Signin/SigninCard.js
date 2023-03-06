import { Paper, Grid, Card, Stack, Typography, InputBase, Checkbox, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import React, { useState } from 'react'
import "./styles.css"
import { Link } from 'react-router-dom';
import { signin } from '../../actions/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SignInImage from "../assets/images/Layer 2.png"
import Message from '../elements/Message';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  password: ''
}
const SigninCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const userLogin = useSelector(state => state.userLogin);
  const loginError = userLogin.error;
  console.log(loginError)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((formData.email && formData.password) && !loginError) {
      dispatch(signin(formData, navigate));
    }
    if (!formData.email && !formData.password) {
      toast.error('All fields are required', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      return;
    }
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
              xs: '1em',
              sm: '1em',
              md: '4em',
              lg: '9em'
            }
          }}>
          <Stack className='signinCard_stack'>
            <Typography color='#414141' variant='p' fontSize='20px' fontWeight='700' marginBottom='32px'>
              SIGN IN
            </Typography>
            {loginError && <Message variant='error'>{loginError} <br /> Please reload the page to sigin  </Message>}
            <form onSubmit={handleSubmit}>
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
                  color: '#694ed6',
                  padding: '12px 20px'
                }} />
                <InputBase placeholder='Enter your Mail' fullWidth onChange={e => handleChange(e)} name='email' />
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
                  color: '#694ed6',
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
              <Stack
                direction='row'
                justifyContent='space-between'
                marginTop='8px'
              >
                <Box className='checkbox_container'>
                  <input type='checkbox' placeholder='Keep me sign in' />
                  Keep me sign in
                </Box>
                <Link className='forgot_link'>
                  Forgot Password ?
                </Link>
              </Stack>
              <Button variant='contained' className='loginBtn' sx={{
                backgroundColor: '#880ED4',
                textTransform: 'initial',
                borderRadius: '10px',
                marginTop: '24px'
              }} type='submit' >
                Login
              </Button>
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
              <Box className='signin_option'>
                {/* <GoogleLogin
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
                  cookiePolicy='single_host_origin' /> */}
              </Box>
              <Box className='signin_option'>
                <LinkedInIcon sx={{
                  color: '#414141',
                  marginRight: '10px'
                }} />
                Signin with LinkedIn
              </Box>
            </Stack>
            <Link className='newAccount_link' to='/signup'>
              <Typography color='#880ED4' fontFamily='Poppins'>New?</Typography>
              <Typography color='black' fontFamily='Poppins'>Create your free account</Typography>
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

export default SigninCard