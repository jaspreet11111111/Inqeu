import { Button, Grid, List, Paper, Typography, Stack } from '@mui/material'
import React, { useEffect } from 'react';
import './styles.css'
import { useParams } from 'react-router-dom';
import Select from '../Post/Select/Select';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from './UserTable';

const Admin = () => {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.userLogin);
	return (
		<Paper className='admin_container'
			sx={{
				padding: {
					xs: '1em',
					sm: '1em',
					md: '2em',
					lg: '3em'
				}
			}}>
			<Grid container className='admin_grid' direction='row'>
				<Grid item xs={12} md={2} lg={2} marginBottom={2} className='adminTopics_container'>
					<Stack spacing={4}>
						<Typography variant='p' fontWeight='600' color='#880ed4' marginTop='2em'>
							Controls
						</Typography>
						<List className='adminTopic_list'>
							<Select name='Carrer' />
							<Select name='Relationship' />
							<Select name='Job' />
							<Select name='Marriage' />
						</List>
					</Stack>
				</Grid>
				<Grid item xs={12} md={10} lg={10} border='1px solid #e5c3fa' className='postContainer'>
					<UserTable />
				</Grid>
			</Grid>
		</Paper>
	)
}

export default Admin