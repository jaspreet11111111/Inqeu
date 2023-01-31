import { Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const EmailVerification = () => {
	const [validUrl, setValidUrl] = useState(false);
	const params = useParams()

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				const url = `http://localhost:3000/api/v1/user/${ params.id }/verify/${ params.token }`;

				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true)
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		}

		verifyUrl();
	}, [params])
	return (
		<>
			{validUrl ? (
				<>
					<Typography>
						'Email verified successfully'
					</Typography>
					<Link to='/auth'>
						<Button>
							Login
						</Button>
					</Link>
				</>
			) : '404 NOT FOUND'}
		</>
	)
}

export default EmailVerification