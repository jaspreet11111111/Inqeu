import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import { Link, NavLink } from 'react-router-dom';
import "./styles.css";
import MenuIcon from '@mui/icons-material/Menu';
import Search from './SearchBar/Search';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const [activeLink, setActiveLink] = useState(false);
  const linkHandler = () => {
    setActiveLink(!activeLink);
    console.log('hello')
  }
  return (
    <>
      <Stack
        sx={{
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none'
          }
        }}
        direction="row"
        className='mobile_menu'>
        <Typography variant='p' fontWeight="700">
          <Link to="/" className='logo_link'>Inque</Link>
        </Typography>
        <Button className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
          sx={{
            color:
              'black'
          }}>
          {activeMenu ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Stack>
      {(activeMenu && <Stack sx={{
        display: {
          xs: 'flex',
          md: 'flex',
          lg: 'none'
        }
      }} spacing={5} className="navbar_links" alignItems="center">
        <Typography variant='p' fontWeight="500" >
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')} >
            Home
          </NavLink>
        </Typography>
        <Typography variant='p' fontWeight="500" >
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
            About
          </NavLink>
        </Typography>
        <Typography variant='p' fontWeight="500">
          <NavLink to="/post" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
            Post
          </NavLink>
        </Typography>
        <Typography variant='p' fontWeight="500" >
          <NavLink to="/ask" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
            Ask/Share
          </NavLink>
        </Typography>
        <Search activeMenu={activeMenu} />
        <Typography variant='p' fontWeight="500">
          <NavLink to="/signin" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
            Sign In
          </NavLink>
        </Typography>
      </Stack>)}
      <Paper className='navbar_contianer' sx={{
        display: {
          xs: 'none',
          md: 'none',
          lg: 'block'
        }
      }}>
        <Paper className='navbar_desktop'>
          <Stack direction='row' spacing={5} className="navbar_links" alignItems="center">
            <Typography variant='p' fontWeight="500">
              <NavLink to="/" className='logo_link'>
                Ique
              </NavLink>
            </Typography>
            <Typography variant='p' fontWeight="500" >
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
                Home
              </NavLink>
            </Typography>
            <Typography variant='p' fontWeight="500" >
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
                About
              </NavLink>
            </Typography>
            <Typography variant='p' fontWeight="500">
              <NavLink to="/post" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
                Post
              </NavLink>
            </Typography>
            <Search activeMenu={activeMenu} />
            <Typography variant='p' fontWeight="500">
              <NavLink to="/signin" className={({ isActive }) => (isActive ? 'active_link' : 'nav_link')}>
                Sign In
              </NavLink>
            </Typography>
          </Stack>
        </Paper>
      </Paper>
    </>
  )
}

export default Navbar