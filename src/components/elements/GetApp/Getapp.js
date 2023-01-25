import { Button, Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react';
import MobileAppImage from "../../assets/images/Rectangle.png"
import GooglePlayImage from "../../assets/images/image 1.png"
import AppStoreImage from "../../assets/images/image 2.png"
import "./styles.css"

const Getapp = () => {
  return (
    <Grid container className='getApp_container'
      sx={{
        padding: {
          xs: '1.5em',
          sm: '1em',
          md: '3em',
          lg: '6em'
        }
      }}>
      <Grid item xs={12} md={5} lg={5}>
        <Stack spacing={3}>
          <Stack className='app_desc' spacing={3}>
            <Typography variant='p' fontWeight='700' color='#414141' sx={{
              fontSize: {
                xs: '32px',
                sm: '36px',
                md: '42px',
                lg: '42px'
              }
            }}>
              Get Started with Inque App
            </Typography>
            <Typography variant='p'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
          </Stack>
          <Stack className='download_links' spacing={2}>
            <Button variant='contained' sx={{
              width: {
                xs: '100%',
                sm: '80%',
                md: '55%',
                lg: '55%'
              },
              backgroundColor: "#694ed6",
              borderRadius: "10px",
              textTransform: 'initial'
            }}>
              Download now
            </Button>
            <Grid container sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '75%',
                lg: '75%'
              },
              margin: 'auto'
            }}>
              <Grid item xs={6} md={5} lg={5}>
                <img src={GooglePlayImage} alt='playstore' />
              </Grid>
              <Grid item xs={6} md={5} lg={5}>
                <img src={AppStoreImage} alt='playstore' />
              </Grid>
            </Grid>
            <Box>
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={5} lg={5} className='mobileAppImage_container'
        sx={{
          marginTop: {
            xs: '3em',
            sm: '3em',
            md: '0',
            lg: '0'
          }
        }} >
        <img src={MobileAppImage} alt='mobileapp' className='mobile_image' />
      </Grid>
    </Grid>
  )
}

export default Getapp