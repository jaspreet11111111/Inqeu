import { Grid, Box, Stack, Typography, Button, InputBase } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { MailOutline } from '@mui/icons-material';
import History from './History/History';
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails, updateUserProfile, updateUser, deleteUser } from '../../actions/userAction';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/actionType';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Delete from './Delete';

const Profile = () => {
  const [user1, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/auth')
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUserProfile({ id: user._id, username: name, email }));
    toast.success('Profile Updated successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    setName('');
    setEmail('');
  }

  return (
    <Box>
      <Grid container padding='2em' className='profileDetails_container'>
        <Grid item xs={12} md={9} lg={9}>
          <Stack className='profileDetails'>
            <Box className='profileCover'></Box>
            <img className='profile_image' src='https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='profile' />
            <Stack
              justifyContent='space-between'
              padding='60px'
              marginTop='-6em'
              sx={{
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                  lg: 'row'
                },
                alignItems: {
                  xs: 'flex-start',
                  sm: 'flex-start',
                  md: 'center',
                  lg: 'center'
                }
              }}>
              <Box className='profileName'>
                <Typography variant='h3' fontWeight='700' color='#880ed4'>
                  {name}
                </Typography>
                <Typography
                  variant='p'
                  fontWeight='600'
                  color='#3f62cd'
                >
                  {email}
                </Typography>
              </Box>
              <Stack spacing='14px'>
                <Button variant='contained'
                  sx={{
                    backgroundColor: "#880ED4",
                    borderRadius: '2em',
                    textTransform: 'initial'
                  }}>
                  <ShareIcon />
                  Share Profile
                </Button>
                {/* <Button variant='outlined'
                  onClick={deleteHandler}
                  sx={{
                    borderColor: "#880ED4",
                    borderRadius: '2em',
                    textTransform: 'initial',
                    color: '#880ED4'
                  }}>
                  <DeleteOutlineIcon sx={{
                    color: '#880ED4'
                  }} />
                  Delete Profile
                </Button> */}
                <Delete id={userInfo._id} />
              </Stack>
            </Stack>
          </Stack>
          <Stack className='profileSetting_container' spacing={3}>
            <Typography variant='h5' fontWeight='700' color='#880ed4'>
              Profile Setting
            </Typography>
            <Box className='emailSetting'>
              <Typography variant='h6' fontWeight='700' marginBottom='1em'>
                Email Address
              </Typography>
              <Stack sx={{
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                  lg: 'row'
                },
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '90%',
                  lg: '90%'
                }
              }} justifyContent='space-between'>
                <Stack direction="row" className='emailChange_input' sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '70%',
                    lg: '70%'
                  },
                  margin: {
                    xs: '10px 0',
                    sm: '10px 0',
                    md: '0 10px',
                    lg: '0 10px'
                  }
                }} >
                  <Button sx={{ color: '#880ed4' }}>
                    <MailOutline />
                  </Button>
                  <InputBase
                    placeholder='Write new email address'
                    type='email'
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </Stack>
                <Button variant='contained' sx={{
                  backgroundColor: "#880ED4",
                  borderRadius: '10px',
                  textTransform: 'initial',
                  width: '30%'
                }}
                  onClick={submitHandler}>
                  Submit
                </Button>
              </Stack>
            </Box>
            <Box className='nameSetting' sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '90%',
                lg: '90%'
              }
            }}>
              <Typography variant='h6' fontWeight='700' marginBottom='1em'>
                Name
              </Typography>
              <Stack justifyContent='space-between'
                sx={{
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row'
                  },
                  justifyContent: 'space-around'
                }}>
                <InputBase placeholder='Write new Name' className='newName_input' sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '70%',
                    lg: '70%'
                  },
                  margin: {
                    xs: '10px 0',
                    sm: '10px 0',
                    md: '0 10px',
                    lg: '0 10px'
                  }
                }}
                  value={name}
                  onChange={e => setName(e.target.value)} />
                <Button variant='contained' sx={{
                  backgroundColor: "#880ED4",
                  borderRadius: '10px',
                  textTransform: 'initial',
                  width: '30%'
                }}
                  onClick={submitHandler}>
                  Submit
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack className='historyContainer' sx={{
            padding: {
              xs: '16px',
              sm: '16px',
              md: '60px',
              lg: '60px'
            }
          }}>
            <History />
          </Stack>
        </Grid>
        <Grid item md={3} lg={2} border="1px solid #e5c3fa" borderRadius='10px'>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile