import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Paper, Button, Card } from "@mui/material";
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./styles.css";
import MenuIcon from '@mui/icons-material/Menu';
import Search from './SearchBar/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  console.log(showProfileMenu)
  console.log("user:", user)
  console.log(user)
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
  useEffect(() => {
    const token = user?.token;

    // JWT....

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.success('Logout successful',
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    navigate('/auth');
    localStorage.clear()
    setUser(null)
  }

  const handleShowProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
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
        <Search activeMenu={activeMenu} />
        <Typography variant='p' fontWeight="500">
          {user ? (
            <Box className='navbar_profile'>
              <Button onClick={handleShowProfileMenu}>
                <Typography className='user_profileImage'>
                  {user.name.substring(0, 1)}
                </Typography>
              </Button>
              <Stack>
                <Typography variant='p' fontSize='16px' fontWeight='500'>
                  {user.name}
                </Typography>
                <Typography variant='p' fontSize='10px' fontWeight='300'>
                  {/* {user.user.email} */}
                </Typography>
              </Stack>
              {!showProfileMenu && (
                <Card className='profileMenuCard' sx={{
                  position: 'absolute',
                  top: '60px',
                  right: '10px',
                  width: '124px',
                  height: '124px'
                }}>
                  <Stack justifyContent='center' direction='row'>
                    <Link to='/profile' className='profileLink' >
                      {/* <Typography className='user_profileImage' textTransform='capitalize'>
                        {user.user.name.substring(0, 1)}
                      </Typography> */}
                      <Typography variant='p' fontSize='16px' fontWeight='500'>
                        {user.name}
                      </Typography>
                    </Link>
                  </Stack>
                  <Button onClick={logout}>Logout</Button>

                </Card>
              )}
            </Box>
          ) : (
            <>
              <Typography variant='p' fontWeight="500">
                <NavLink to='/auth' className={({ isActive }) => (isActive ? 'login_btn' : 'signin_btn')}>
                  {!isSignedUp ? 'Signin' : 'Signup'}
                </NavLink>

              </Typography>
            </>
          )}
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
            {user ? (
              <Box className='navbar_profile'>
                <Button onClick={handleShowProfileMenu}>
                  <Typography className='user_profileImage'>
                    {/* {user.name.substring(0, 1)} */}
                  </Typography>
                </Button>
                <Stack>
                  <Typography variant='p' fontSize='16px' fontWeight='500'>
                    {/* {user.name} */}
                  </Typography>
                  <Typography variant='p' fontSize='10px' fontWeight='300'>
                    {/* {user.user.email} */}
                  </Typography>
                </Stack>
                {!showProfileMenu && (
                  <Card className='profileMenuCard' sx={{
                    position: 'absolute',
                    top: '60px',
                    right: '10px',
                    width: '124px',
                    height: '124px'
                  }}>
                    <Stack justifyContent='center' direction='row'>
                      <Link to='/profile' className='profileLink' >
                        {/* <Typography className='user_profileImage' textTransform='capitalize'>
                          {user.user.name.substring(0, 1)}
                        </Typography> */}
                        <Typography variant='p' fontSize='16px' fontWeight='500'>
                          {/* {user.name} */}
                        </Typography>
                      </Link>
                    </Stack>
                    <Button onClick={logout}>Logout</Button>
                  </Card>
                )}
              </Box>
            ) : (
              <>
                <Typography variant='p' fontWeight="500">
                  <NavLink to='/auth' className={({ isActive }) => (isActive ? 'login_btn' : 'signin_btn')}>
                    {!isSignedUp ? 'Signin' : 'Signup'}
                  </NavLink>
                </Typography>
              </>
            )}

          </Stack>
        </Paper>
      </Paper>
    </>
  )
}

export default Navbar