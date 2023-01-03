import React from 'react'
import { Grid, Stack, TextField, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// ADD Functions onclick and on change
const Search = ({ activeMenu }) => {
  return (
    <Stack

      sx={{
        border: "1px solid lightgray",
        backgroundColor: "#f5e7fd",
        borderRadius: "15px",
        width: {
          xs: '90%',
          md: '90%',
          lg: '65%'
        }

      }}
      direction='row'
      alignItems="center"
      spacing={2}>
      <Button sx={{ color: "black" }}>
        <SearchIcon />
      </Button>
      <InputBase placeholder='Type your queries' fullWidth sx={{ border: "none" }} />
      <Button sx={{
        color: '#880ed4'
      }}>
        <CloseIcon />
      </Button>
    </Stack>
  )
}

export default Search