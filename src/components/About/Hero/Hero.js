import { Card, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Hero = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6} sx={{
        margin: "auto",
        padding: {
          xs: '1em',
          sm: '2em',
          md: '4em',
          lg: '5em'
        }
      }} >
        <Stack spacing={2} padding='2em'>
          <Typography variant='h3' fontWeight='700' color='#414141'>
            Doing greater good to mankind
          </Typography>
          <Typography variant='p'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{
        margin: "auto",
        padding: {
          xs: '2em',
          sm: '2em',
          md: '4em',
          lg: '5em'
        },
        justifyContent: 'center'
      }}>
        <Card sx={{
          width: {
            xs: '95%',
            sm: '90%',
            md: '70%',
            lg: '60%'
          }, height: '150px', backgroundColor: 'gray'
        }}></Card>
        <Stack direction='row' alignItems='center' marginTop='2em' spacing={2} >
          <Typography variant='h5'>
            Join
          </Typography>
          <Typography variant='h3' color='#880ed4'>
            Inqeu.com
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Hero