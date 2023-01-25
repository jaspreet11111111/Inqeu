import { Button, Card, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Select = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div></div>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        padding='0 10px'
        border='1px solid lightgray'>
        <Typography color='gray' variant='p' fontWeight='500'>
          {name}
        </Typography>
        <Button onClick={handleClick} sx={{ textTransform: 'initial', color: 'black' }} >
          <ArrowDropDownIcon />
        </Button>
      </Stack>
      {/* <Card> */}
      {isClicked && (
        <List sx={{
          boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.25)',
          zIndex: 99,
          bgcolor: '#FBF6FE',
          width: '100%'
        }}>
          <ListItem>
            Item 1
          </ListItem>
          <ListItem>
            Item 2
          </ListItem>
          <ListItem>
            Item 3
          </ListItem>
        </List>
      )}
      {/* </Card> */}

    </>
  )
}

export default Select