import { Paper } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Contact from '../elements/Contact/Contact'
import Getapp from '../elements/GetApp/Getapp'
import Hero from './Hero/Hero'
import Middle from '../elements/Middle/middle'

const Home = () => {
	return (
		<Paper>
			<Hero />
			<Middle />
			<Getapp />
			<Contact />
		</Paper>
	)
}

export default Home