import { Button, Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react';
import "./styles.css"

const Getapp = () => {
    return (
        <Grid container className='getApp_container'
            sx={{
                padding: {
                    xs: '1.5em',
                    sm: '1em',
                    md: '3em',
                    lg: '5em'
                }
            }}>
            <Grid item xs={12} md={5} lg={5}>
                <Stack spacing={3}>
                    <Stack className='app_desc' spacing={3}>
                        <Typography variant='h3' fontWeight='700' color='#414141'>
                            Get Started with Inque App
                        </Typography>
                        <Typography variant='p'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Stack>
                    <Stack className='download_links' >
                        <Button variant='contained' sx={{
                            width: "50%",
                            backgroundColor: "#694ed6",
                            borderRadius: "3em",
                            textTransform: 'initial'
                        }}>
                            Download now
                        </Button>
                        <Box>

                        </Box>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
                <img />
            </Grid>
        </Grid>
    )
}

export default Getapp