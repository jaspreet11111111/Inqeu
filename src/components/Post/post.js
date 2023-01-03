import { Button, Grid, List, ListItem, Paper, Typography, Stack } from '@mui/material'
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './styles.css'
import PostCards from './PostCards/PostCards';
import data from "../../dev-data/postsData"
import Select from './Select/Select';
const Post = () => {
  return (
    <Paper className='post_container'
      sx={{
        padding: {
          xs: '1em',
          sm: '1em',
          md: '2em',
          lg: '3em'
        }
      }}>
      <Grid container className='posts_grid' direction='row'>
        <Grid item xs={12} md={2} lg={2} marginBottom={2} className='postTopics_container'>
          <Stack spacing={4}>
            <Typography variant='p' fontWeight='600' color='#880ed4' marginTop='2em'>
              Topics
            </Typography>
            <List className='postTopic_list'>
              <Select name='Carrer' />
              <Select name='Relationship' />
              <Select name='Job' />
              <Select name='Marriage' />
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} lg={7} border='1px solid #e5c3fa' className='postContainer'>
          {data.map(post => (
            <PostCards data={post} key={post.id} />
          ))}
        </Grid>
        <Grid item xs={12} md={2} lg={2} border='1px solid #e5c3fa' className='postProfile_contaier'>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Post