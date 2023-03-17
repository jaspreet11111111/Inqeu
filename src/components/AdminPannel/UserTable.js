import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { listUsers } from '../../actions/userAction';

// const data = [
// 	{ srNo: 1, username: 'john_doe', email: 'john_doe@example.com', userId: '123456', ipAddress: '192.168.0.1' },
// 	{ srNo: 2, username: 'jane_doe', email: 'jane_doe@example.com', userId: '234567', ipAddress: '192.168.0.2' },
// 	{ srNo: 3, username: 'jim_smith', email: 'jim_smith@example.com', userId: '345678', ipAddress: '192.168.0.3' },
// ];
function UserTable () {
	const [data, setData] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		axios.get('/api/v1/user')
			.then(response => {
				setData(response.data.user);
				console.log(response)
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const userList = useSelector(state => state.userList);
	console.log(data);
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Sr No.</TableCell>
						<TableCell>User ID</TableCell>
						<TableCell>Username</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>IP Address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data && data.map((row, index) => (
						<TableRow key={row._id}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{row._id}</TableCell>
							<TableCell>{row?.name}</TableCell>
							<TableCell>{row?.email}</TableCell>
							<TableCell>{row?.ipAddress || '127.0.0'}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default UserTable;
