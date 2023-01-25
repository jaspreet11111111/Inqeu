import React from 'react'
import { Box, Button, Stack, Typography } from "@mui/material";
import "../styles.css"
import AskQDialog from './AskQDialog/AskQDialog';
import ShareExpDialog from './ShareExp/ShareExp';
const UserQA = () => {
	return (
		<Box>
			<Stack className='profileInfo_container' direction='row' spacing={2}>
				<img src='https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='profile' className='profileImage' />
				<Stack >
					<Typography fontWeight='600'>You</Typography>
					<Typography fontSize='12px'>Web Developer</Typography>
				</Stack>
			</Stack>
			<Stack className='btnsContainer' direction='row'>
				<AskQDialog />
				<ShareExpDialog />
			</Stack>
		</Box>
	)
}

export default UserQA