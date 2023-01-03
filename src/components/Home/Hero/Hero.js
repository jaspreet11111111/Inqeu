import { Card, Grid, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import React from 'react'
import { flexbox } from '@mui/system'

const Hero = () => {
  return (
    <Grid container>
      <Grid md={6} lg={6} xs={12}
        item
        sx={{
          margin: "auto",
          padding: "5em"
        }} >
        <Stack spacing={2} >
          <Typography variant='h3' fontWeight="600" textAlign="center">
            Search Search?
          </Typography>
          <Typography variant='h3' fontWeight="600" color="#880ed4" textAlign="center">
            Search on Inqeu.com
          </Typography>
        </Stack>
        <Stack spacing={2} marginTop="3em">
          <Typography variant='h3' fontWeight="600" textAlign="center">
            Post Post?
          </Typography>
          <Typography variant='h3' fontWeight="600" color="#880ed4" textAlign="center">
            Post on Inqeu.com
          </Typography>
        </Stack>
      </Grid>
      <Grid md={6} lg={6} xs={12} item justifyContent="center" sx={{
        padding: {
          xs: '1em',
          sm: '2em',
          md: '5em',
          lg: '5em'
        },
        marginBottom: {
          xs: '2em'
        },
      }}>
        <Card sx={{
          width: {
            xs: '85%',
            sm: '85%',
            md: '80%',
            lg: '80%'
          },
          height: "90%",
          display: "flex",
          flexDirection: "column",
          padding: 2,
          margin: "auto",
          backgroundColor: "#eeddff"
        }}>
          <Typography variant='h5' fontWeight="600" textAlign="left" marginBottom={3}>
            How it works
          </Typography>
          <ReactPlayer url="https://www.youtube.com/watch?v=GGo3MVBFr1A" width="100%" height="80%" />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Hero