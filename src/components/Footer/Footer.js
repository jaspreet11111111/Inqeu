import { MailOutline } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack, Box, Typography, List, ListItem, Grid, TextField, Button, InputBase } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"
const Footer = () => {
  return (
    <Stack
      direction="row"
      className='footer_container'
      spacing={5}
      justifyContent="space-around"
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'flex',
          lg: 'flex'
        }
      }}>
      <Box className='footer_right' >
        <Typography variant='h4' marginBottom={1.5}>
          Inqeu
        </Typography>
        <Typography variant='h6'>
          inqeu.com-Doing greater good to mankind
        </Typography>
      </Box>
      <Box className='footer_mid'>
        <List>
          <ListItem>
            <Link to="/" className='footer_link'>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/about" className='footer_link'>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/post" className='footer_link'>
              Post
            </Link>
          </ListItem>
        </List>
      </Box>
      <Stack className='footer_left' spacing={2}>
        <Typography variant='h4' fontWeight="700">
          Get our newsletter
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack direction="row" className='newsletter_input' >
            <Button sx={{ color: '#880ed4' }}>
              <MailOutline />
            </Button>
            <InputBase placeholder='Label' />
          </Stack>
          <Button variant='contained' sx={{ backgroundColor: 'white', color: '#880ed4' }}>
            Submit
          </Button>
        </Stack>
        <Stack direction="row">
          <Link to="#">
            <Button sx={{ color: "white" }}>
              <InstagramIcon />
            </Button>
          </Link>
          <Link to="#">
            <Button sx={{ color: "white" }}>
              <FacebookIcon />
            </Button>
          </Link>
          <Link to="#">
            <Button sx={{ color: "white" }}>
              <TwitterIcon />
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Footer