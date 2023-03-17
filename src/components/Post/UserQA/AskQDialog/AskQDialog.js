import { Button, Dialog, DialogContent, Typography, DialogTitle, DialogActions, Stack } from '@mui/material';
import React, { useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import '../../styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../../../actions/posts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../../../../actions/history';

const ShareExpDialog = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector(state => state.userLogin);
  // console.log(userInfo)

  const [userLocal, setUserLocal] = useState(localStorage.getItem('profile'));

  const parsedData = JSON.parse(userLocal);
  const [open, setOpen] = useState(false);

  const [postData, setPostData] = useState({
    description: '',
    username: parsedData?.name,
    userId: parsedData?._id
  });

  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSwitch = () => {
    setIsActive(!isActive);
    setOpen(true)
  }

  const [historyData, setHistoryData] = useState({
    message: 'You added new question',
    userId: userInfo?._id,
    action: 'added'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userLocal !== null) {
      dispatch(createPost(postData))
      dispatch(addHistory(historyData))
      toast.success('Question added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleClose();
    }
    else {
      navigate('/signin')
      toast.warning('Please signup or login to add posts', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div>
      <Button variant='contained' sx={{
        textTransform: 'initial',
        borderRadius: '10px',
        bgcolor: '#694ED6',
        width: {
          xs: '100%',
          sm: '100%',
          md: '200px',
          lg: '250px'
        }
      }}
        onClick={handleClickOpen}>
        Ask Question
      </Button>
      <form onSubmit={handleSubmit}>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth
          className='dialog_box'
        >
          <Typography sx={{
            fontSize: '28px',
            textAlign: 'center',
            fontWeight: '600',
            color: '#880ED4',
            padding: '24px'
          }}
            onClose={handleClose}>
          </Typography>
          <Stack width='100%' direction='row' justifyContent='center'
            sx={{
              padding: {
                xs: '0em',
                md: '1em',
                lg: '0em'
              }
            }}>
            <Button variant={!isActive ? 'contained' : 'outlined'} sx={{
              margin: '16px',
              width: {
                xs: '90%',
                sm: '100%',
                md: '200px',
                lg: '250px'
              },
              backgroundColor: !isActive ? '#694ED6' : 'white',
              borderRadius: '10px',
              color: !isActive ? '' : '#694ED6',
              border: !isActive ? '' : '1px solid #694ED6',
              textTransform: 'initial'
            }}
              className={isActive ? 'activeBtn' : 'nonActiveBtn '}
              onClick={handleSwitch}>
              Ask Question
            </Button>
            <Button variant={isActive ? 'contained' : 'outlined'} sx={{
              margin: '16px',
              width: {
                xs: '90%',
                sm: '100%',
                md: '200px',
                lg: '250px'
              },
              backgroundColor: isActive ? '#694ED6' : 'white',
              borderRadius: '10px',
              color: isActive ? '' : '#694ED6',
              border: isActive ? '' : '1px solid #694ED6',
              textTransform: 'initial'
            }}
              className={!isActive ? 'activeBtn' : 'nonActiveBtn'}
              onClick={handleSwitch}>
              Share Experience
            </Button>
          </Stack>
          <DialogContent>
            <Stack
              bgcolor="#ffff"
              direction="row"
              alignItems
              border="1px solid #880ed4"
              sx={{
                width: '100%',
                height: '440px',
                borderRadius: '4px'
              }}>
              <SortIcon sx={{ color: '#694ed6', margin: '20.5px 18.5px' }} />
              <textarea
                placeholder='Type your message'
                className='messageArea_input'
                name='shareExperience'
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}>
              </textarea>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant='contained'
              sx={{
                textTransform: 'initial',
                borderRadius: '10px',
                bgcolor: '#694ED6',
                width: {
                  xs: '90%',
                  sm: '90%',
                  md: '75%',
                  lg: '40%'
                },
                margin: 'auto'
              }}
              autoFocus
              onClick={handleSubmit}>
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </form>

    </div>
  )
}

export default ShareExpDialog


