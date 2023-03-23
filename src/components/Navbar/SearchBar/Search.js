import React, { useState } from 'react'
import { Grid, Stack, TextField, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import '../styles.css'
import { useNavigate } from 'react-router-dom';
// ADD Functions onclick and on change
const Search = ({ navigate }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    // console.log('search form');
    // console.log(keyword)
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${ keyword }`)
    }
    else {
      navigate('/')
    }
  }

  const clearSearch = () => {
    setKeyword('');
  }
  return (
    <form className='search_form'>
      <Stack
        sx={{
          border: "1px solid lightgray",
          backgroundColor: "#f5e7fd",
          borderRadius: "15px"
        }}
        direction='row'
        alignItems="center"
        spacing={2}>
        <Button sx={{ color: "black" }} onClick={submitHandler}>
          <SearchIcon />
        </Button>
        <InputBase placeholder='Type your queries' fullWidth sx={{ border: "none" }} onChange={(e) => setKeyword(e.target.value)} />
        <Button onClick={clearSearch}>
          <CloseIcon sx={{
            color: '#880ed4'
          }} />
        </Button>
      </Stack>
    </form>
  )
}

export default Search