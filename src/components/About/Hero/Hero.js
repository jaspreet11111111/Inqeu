import { Card, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Hero = () => {
  return (
    <Grid container sx={{
      padding: {
        xs: '1.5em',
        sm: '1em',
        md: '3em',
        lg: ' 5em 10em'
      }
    }}>
      <Grid item xs={12} md={6} lg={6} sx={{
        margin: "auto",

      }} >
        <Stack spacing={2}
          sx={{
            padding: {
              xs: '0',
              sm: 0,
              md: '2em',
              lg: '2em'
            }
          }}>
          <Typography variant='p' fontWeight='700' color='#880ED4'
            sx={{
              fontSize: {
                xs: '32px',
                sm: '36px',
                md: '42px',
                lg: '42px'
              }
            }}>
            Inqeu.com is
          </Typography>
          <Typography variant='p'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{
        margin: "auto",
        padding: {
          xs: ' 2em 0',
          sm: '2em 0',
          md: '4em',
          lg: '5em'
        },
        justifyContent: 'center'
      }}>
        <Typography
          variant='p'
          fontSize='21px'
          fontWeight='700'
          color='#414141'>
          Doing greater good to mankind
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
      </Grid>
    </Grid>
  )
}

export default Hero