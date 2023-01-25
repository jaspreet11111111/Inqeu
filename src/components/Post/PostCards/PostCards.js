import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import '../styles.css'
const PostCards = ({ data }) => {
  // console.log("postCard_data:", data);
  return (
    <Box>
      <Stack className='profileInfo_container' direction='row' spacing={2}>
        <img src='https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='profile' className='profileImage' />
        <Stack >
          <Typography fontWeight='600'>{data?.username}</Typography>
          <Typography fontSize='12px'>{data.jobTitle}</Typography>
        </Stack>
      </Stack>
      <Box className='profilePost'>
        <Typography>
          {data?.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default PostCards