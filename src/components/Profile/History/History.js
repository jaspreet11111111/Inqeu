import { Typography, List, ListItem } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listHistory } from '../../../actions/history';
import '../styles.css';

const History = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listHistory())
	}, [])

	const activities = useSelector(state => state.activity);
	const loginUser = localStorage.getItem('profile');
	const userId = JSON.parse(loginUser)._id;

	const filteredActivity = activities?.activity?.history?.filter((item) => item.userId === userId);
	console.log(filteredActivity);

	return (
		<>
			<Typography variant='h4' sx={{
				fontWeight: '700',
				fontSize: '21px',
				color: '#880ED4',
				marginBottom: '24px'
			}}>
				Last Activities
			</Typography>
			{filteredActivity && filteredActivity.map((item) => {
				const date = new Date(item.timestamp);
				const dateString = date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				});
				return (
					<List className='historyList' key={item.id}>
						<ListItem className='historyItem'>
							<Typography>{dateString}</Typography>
							<Typography sx={{
								fontSize: '12px',
								fontWeight: '500',
								marginLeft: '32px'
							}}>{item.message}</Typography>
						</ListItem>
					</List>
				)
			})}
		</>
	)
}

export default History
