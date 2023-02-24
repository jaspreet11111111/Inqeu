import { Box, Button, InputBase, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addHistory } from '../../../actions/history';
import { likePosts } from '../../../actions/posts'
import { addLikeHistory } from '../../../actions/history';
const PostCards = ({ data }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const userLogin = useSelector(state => state.userLogin);
  // const likeData = {
  //   userId: userLogin.userInfo._id,
  //   action: 'liked',
  //   postId: data?._id,
  //   message: 'You liked this post'
  // }
  // console.log(data);
  const likeHandler = () => {
    setLike(!like);
    // dispatch(likePosts(data?.id))
    // dispatch(addLikeHistory(likeData))

  }
  return (
    <Box>
      <Stack className='profileInfo_container' direction='row' spacing={2}>
        <Box className='profileImage'>
          <Typography textTransform='capitalize' color='white' textAlign='center'>
            {data?.username.substring(0, 1)}
          </Typography>
        </Box>
        <Stack >
          <Typography fontWeight='600'>{data?.username}</Typography>
          <Typography fontSize='12px'>{data.jobTitle}</Typography>
        </Stack>
      </Stack>
      <Box className='profilePost'>
        <Typography>
          {data?.description}
        </Typography>

        <Box className='reviewBox' sx={{
          display: 'flex'
        }}>
          <Box className='likeBtn' sx={{
            width: {
              xs: '10%',
              sm: '20%',
              md: '30%',
              lg: '30%'
            }
          }}>
            <Button onClick={likeHandler}>
              <FavoriteIcon sx={{
                color: like ? '#E5C2FA' : '#C7C8CA'
              }} />
            </Button>
          </Box>
          <Box className='commentBox' sx={{
            width: {
              xs: '80%',
              sm: '80%',
              md: '60%',
              lg: '60%'
            }
          }}>
            <InputBase placeholder='Comment' sx={{
              border: '1px solid #E5C2FA',
              width: {
                xs: '95%',
                sm: '90%',
                md: '80%',
                lg: '80%'
              },
              margin: '0 8px',
              borderRadius: '4px'
            }} />
            <Button sx={{
              background: '#C7C8CA',
              borderRadius: '4px',
              color: 'white',
              fontSize: {
                xs: '8px',
                sm: '8px',
                md: '12px',
                lg: '12px'
              },
              textTransform: 'inherit',
              width: {
                xs: '50%',
                sm: '50%',
                md: '30%',
                lg: '30%'
              }
            }}>
              Add Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PostCards