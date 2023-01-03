import { Grid, Box, Stack, Typography, Button, InputBase } from '@mui/material';
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { MailOutline } from '@mui/icons-material';
import "./styles.css";
const Profile = () => {
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
                  Name
                </Typography>
                <Typography
                  variant='p'
                  fontWeight='600'
                  color='#3f62cd'
                >
                  job title
                </Typography>
              </Box>
              <Button variant='contained'
                sx={{
                  backgroundColor: "#694ed6",
                  borderRadius: '2em',
                  textTransform: 'initial'
                }}>
                <ShareIcon />
                Share Profile
              </Button>
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
                  <InputBase placeholder='Write new email address' type='email' fullWidth />
                </Stack>
                <Button variant='contained' sx={{
                  backgroundColor: "#694ed6",
                  borderRadius: '1em',
                  textTransform: 'initial',
                  width: '25%'
                }}>
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
                <InputBase placeholder='Write new First Name' className='newName_input' sx={{
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
                }} />
                <InputBase placeholder='Write new Last Name' className='newName_input' sx={{
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
                }} />
                <Button variant='contained' sx={{
                  backgroundColor: "#694ed6",
                  borderRadius: '1em',
                  textTransform: 'initial',
                  width: '30%'
                }}>
                  Submit
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid item md={3} lg={2} border="1px solid #e5c3fa ">
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile