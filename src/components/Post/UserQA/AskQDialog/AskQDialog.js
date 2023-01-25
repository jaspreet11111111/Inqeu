import { Button, Dialog, DialogContent, Typography, DialogTitle, DialogActions, Stack, Grid } from '@mui/material';
import React, { useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import "./styles.css"

const AskQDialog = () => {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
        }} onClose={handleClose}>
          {isActive ? 'Share Experience' : 'Ask Question'}
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
            marginLeft: '1em',
            width: {
              xs: '90%',
              sm: '100%',
              md: '200px',
              lg: '250px'
            }
          }}
            className={!isActive ? 'activeBtn' : 'nonActiveBtn'}
            onClick={handleSwitch}>
            Ask Question
          </Button>
          <Button variant={isActive ? 'contained' : 'outlined'} sx={{
            marginRight: '1em',
            width: {
              xs: '90%',
              sm: '100%',
              md: '200px',
              lg: '250px'
            }
          }}
            className={isActive ? 'activeBtn' : 'nonActiveBtn'}
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
            <textarea placeholder='Type your message' className='messageArea_input'>
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
            onClick={handleClose}>
            Post
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default AskQDialog