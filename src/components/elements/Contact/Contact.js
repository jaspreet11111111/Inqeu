import { Box, Button, Grid, InputBase, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import "./styles.css"
const Contact = () => {
  return (
    <Grid container sx={{
      backgroundColor: "#eeddff", padding: {
        xs: '1em',
        sm: '1em',
        md: '2em',
        lg: '3em'
      }
    }}>
      <Grid item xs={12} md={6} lg={6}>
        <Typography
          variant='h3'
          fontWeight="700"
          color="#414141"
          textAlign='center'
          paddingTop='1em'>
          Query
        </Typography>
        <Stack spacing='8px' alignItems="center"
          sx={{
            padding: {
              xs: '0',
              sm: '0',
              md: '2em',
              lg: '3em'
            }
          }}>
          <Stack
            bgcolor="#ffff"
            alignItems="center"
            direction="row"
            border="1px solid #880ed4"
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '80%',
                lg: '80%'
              },
              height: '48px',
              borderRadius: '4px'
            }}>
            <PersonIcon sx={{
              color: '#694ed6',
              padding: '12px 20px'
            }} />
            <InputBase placeholder='Enter Your Name' fullWidth />
          </Stack>
          <Stack
            bgcolor="#ffff"
            direction="row"
            alignItems border="1px solid #880ed4"
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '80%',
                lg: '80%'
              },
              height: '48px',
              borderRadius: '4px'
            }}>
            <MailIcon sx={{
              color: '#694ed6',
              padding: '12px 20px'
            }} />
            <InputBase placeholder='Enter your Mail' fullWidth />
          </Stack>
          <Stack
            bgcolor="#ffff"
            direction="row"
            alignItems
            border="1px solid #880ed4"
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '80%',
                lg: '80%'
              },
              height: '48px',
              borderRadius: '4px'
            }}>
            <PhoneIphoneIcon
              sx={{
                color: '#694ed6',
                padding: '12px 20px'
              }} />
            <InputBase placeholder='Enter your Phone number' type='number' fullWidth />
          </Stack>
          <Stack
            bgcolor="#ffff"
            direction="row"
            alignItems
            border="1px solid #880ed4"
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: '80%',
                lg: '80%'
              },
              borderRadius: '4px'
            }}>
            <SortIcon sx={{ color: '#694ed6', margin: '20.5px 18.5px' }} />
            <textarea placeholder='Enter your message' className='textArea_input'>
            </textarea>
          </Stack>
          <Button variant='contained' sx={{
            width: "80%",
            backgroundColor: "#694ed6",
            borderRadius: "10px"
          }}>
            Submit
          </Button>
        </Stack>
      </Grid>
      <Grid xs={12} md={6} lg={6} alignItems="center">
        <Stack
          width="80%"
          margin="auto"
          spacing={3}
          sx={{
            padding: {
              xs: '1em',
              sm: '1em',
              md: '2em',
              lg: '3em'
            },
            marginTop: {
              xs: '2em',
              sm: '1em',
              md: '0em',
              lg: '0em'
            },
            width: {
              xs: '100%',
              sm: '100%',
              md: '80%',
              lg: '80%'
            }
          }}>
          <Typography variant='h3' fontWeight="700" color="#414141" >
            Reach out
          </Typography>
          <Box>
            IMAGE
          </Box>
          <Typography variant='p'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </Typography>
          <Stack spacing={1}>
            <Typography variant='p' fontWeight="700">Email Us:</Typography>
            <Typography>xyz@Inqeu.com</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Contact