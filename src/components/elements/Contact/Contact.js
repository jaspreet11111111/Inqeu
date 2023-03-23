import { Box, Button, Grid, InputBase, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import MapImage from "../../assets/images/Map.jpg";
import Map from './Maps'
import "./styles.css";
import { useDispatch } from 'react-redux';
import { createQuery } from '../../../actions/query';
import { toast } from 'react-toastify';
const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  message: ''
}
const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  // console.log(formData)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    dispatch(createQuery(formData));
    toast.success("Query successfully added! Will reach you soon", {
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
  return (
    <Grid container sx={{
      backgroundColor: "#eeddff", padding: {
        xs: '1em',
        sm: '1em',
        md: '2em',
        lg: ' 3em 6em'
      }
    }}>
      <Grid item xs={12} md={6} lg={6} >
        <Stack spacing='8px'
          sx={{
            padding: {
              xs: '0em',
              sm: '0em',
              md: '2em',
              lg: '2em'
            },
            marginTop: '24px'
          }}>
          <Typography
            variant='p'
            sx={{
              fontSize: {
                xs: '32px',
                sm: '36px',
                md: '42px',
                lg: '42px'
              },
              fontWeight: "700",
              color: "#414141",
              marginBottom: '1em'
            }}>
            Query
          </Typography>
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
            <InputBase
              placeholder='Enter Your Name'
              fullWidth
              name='name'
              onChange={(e) => handleChange(e)} />
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
            <InputBase
              placeholder='Enter your Mail'
              fullWidth
              name='email'
              onChange={(e) => handleChange(e)} />
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
            <InputBase
              placeholder='Enter your Phone number'
              type='number'
              fullWidth
              name='phoneNumber'
              onChange={(e) => handleChange(e)} />
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
            <textarea
              placeholder='Enter your message'
              className='textArea_input'
              name='message'
              onChange={(e) => handleChange(e)}>
            </textarea>
          </Stack>
          <Button variant='contained' sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '80%',
              lg: '80%'
            },
            backgroundColor: "#694ed6",
            borderRadius: "10px"
          }}
            onClick={handleSubmit}>
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
              xs: '0em',
              sm: '0em',
              md: '2em',
              lg: '3em'
            },
            marginTop: {
              xs: '2em',
              sm: '1em',
              md: '1em',
              lg: '1em'
            },
            width: {
              xs: '100%',
              sm: '100%',
              md: '80%',
              lg: '80%'
            }
          }}>
          <Typography variant='p' fontWeight="700" color="#414141"
            sx={{
              fontSize: {
                xs: '32px',
                sm: '36px',
                md: '42px',
                lg: '42px'
              },
              marginBottom: '20px'
            }} >
            Reach out
          </Typography>
          <Box className='mapImage'>
            <Map />
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