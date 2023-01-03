import React from 'react'
import { Box, Grid, Typography, Stack } from '@mui/material'
import { width } from '@mui/system'
const Middle = () => {
  return (
    <Grid xs={12} container
      sx={{
        backgroundColor: "#eeddff",
        borderRadius: "3em",
        padding: {
          xs: '1em',
          sm: '1em',
          md: '2em',
          lg: '3em'
        },
        margin: "auto",
        width: "95%"
      }} >
      <Grid item xs={12} md={4} lg={4} padding="2em">
        <Typography variant='h5' lineHeight={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} padding="2em" >
        <Typography variant='h5' lineHeight={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} padding="2em">
        <Typography variant='h5' lineHeight={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Middle