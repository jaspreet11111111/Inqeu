import { Typography, List, ListItem } from '@mui/material'
import React from 'react'
import '../styles.css';
const History = () => {
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
			<List className='historyList'>
				<ListItem className='historyItem'>
					<Typography>30 December</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>You searched for 'What is life'</Typography>
				</ListItem>
				<ListItem className='historyItem_alternative'>
					<Typography>30 December</Typography>
					<Typography sx={{
						fontSize: '12px',
						fontWeight: '500',
						marginLeft: '32px'
					}}>You searched for 'What is life'</Typography>
				</ListItem>
			</List>
		</>
	)
}

export default History