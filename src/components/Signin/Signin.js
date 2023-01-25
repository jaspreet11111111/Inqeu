import { Paper, Grid } from '@mui/material'
import React from 'react'
import Contact from '../elements/Contact/Contact'
import Getapp from '../elements/GetApp/Getapp'
import SigninCard from './SigninCard'

const Signin = () => {
	return (
		<>
			<SigninCard />
			<Getapp />
			<Contact />
		</>
	)
}

export default Signin